
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static instance: GeminiService;

  private constructor() {}

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  /**
   * Transforms an image based on a style prompt using the Gemini 2.5 Flash Image model.
   * Re-instantiates the client per-call for robust environment variable handling.
   */
  public async transformImage(base64Image: string, prompt: string): Promise<string> {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      throw new Error("API configuration is missing. Please ensure the API Key is set in your environment variables.");
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash-image';
    
    // Clean base64 string and extract MIME type
    const dataMatch = base64Image.match(/^data:([^;]+);base64,(.+)$/);
    const mimeType = dataMatch ? dataMatch[1] : 'image/png';
    const data = dataMatch ? dataMatch[2] : base64Image.split(',')[1] || base64Image;

    try {
      const response = await ai.models.generateContent({
        model,
        contents: [
          {
            parts: [
              {
                inlineData: {
                  data,
                  mimeType,
                },
              },
              {
                text: `${prompt}. Preserve the original subject's facial features and essential structure. Ensure the output is high-fidelity and artistic.`,
              },
            ],
          }
        ],
      });

      if (!response.candidates?.[0]?.content?.parts) {
        throw new Error("The AI engine returned an empty response. This may be due to a safety filter or temporary service outage.");
      }

      let imageUrl = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!imageUrl) {
        const textPart = response.candidates[0].content.parts.find(p => p.text);
        if (textPart) {
          throw new Error(`AI Engine Note: ${textPart.text}`);
        }
        throw new Error("No image was generated. Please try a different style or photo.");
      }

      return imageUrl;
    } catch (error: any) {
      console.error("Gemini transformation error:", error);
      
      // Handle common API errors with user-friendly messages
      const msg = error.message || "";
      if (msg.includes("403") || msg.includes("API_KEY_INVALID")) {
        throw new Error("The provided API Key is invalid or has expired.");
      } else if (msg.includes("429")) {
        throw new Error("Too many requests. Please wait a moment before trying again.");
      } else if (msg.includes("404")) {
        throw new Error("The MIR AI model is currently undergoing maintenance. Please try again later.");
      }
      
      throw error;
    }
  }

  public async logGeneration(data: { style: string; status: string; timestamp?: number; error_type?: string }) {
    console.log("Analytics Log:", {
      ...data,
      timestamp: data.timestamp || Date.now(),
      platform: "ZIPER-WEB-MIR"
    });
  }
}
