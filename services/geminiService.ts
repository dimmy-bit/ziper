
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
   * Re-instantiates the client per-call to ensure we use the latest environment API key.
   */
  public async transformImage(base64Image: string, prompt: string): Promise<string> {
    // Re-instantiate the AI client right before use to ensure the latest API_KEY is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const model = 'gemini-2.5-flash-image';
    
    // Clean base64 string and extract MIME type
    const data = base64Image.split(',')[1] || base64Image;
    const mimeType = base64Image.match(/data:([^;]+);/)?.[1] || 'image/png';

    try {
      const response = await ai.models.generateContent({
        model,
        contents: {
          parts: [
            {
              inlineData: {
                data,
                mimeType,
              },
            },
            {
              text: `${prompt}. Preserve the original subject's facial features and essential structure. Ensure the output is high-fidelity, professional, and visually stunning.`,
            },
          ],
        },
      });

      if (!response.candidates?.[0]?.content?.parts) {
        throw new Error("Invalid response from MIR AI engine.");
      }

      let imageUrl = '';
      // Iterate through all parts to find the image part, as text might also be returned
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!imageUrl) {
        // Check if the model returned text instead (often a safety refusal)
        const textPart = response.candidates[0].content.parts.find(p => p.text);
        if (textPart) {
          throw new Error(`AI Note: ${textPart.text}`);
        }
        throw new Error("The transformation was filtered. Please try a different photo or style.");
      }

      return imageUrl;
    } catch (error: any) {
      console.error("Gemini transformation error:", error);
      // Surface helpful error messages to the UI
      if (error.message?.includes("API_KEY")) {
        throw new Error("System is authenticating. Please try again in a moment.");
      }
      throw error;
    }
  }

  /**
   * Logs generation metadata for analytics and stability tracking.
   */
  public async logGeneration(data: { style: string; status: string; timestamp?: number; error_type?: string }) {
    // Analytics logging for ZIPER quality control
    console.log("Analytics Log:", {
      ...data,
      timestamp: data.timestamp || Date.now(),
      platform: "ZIPER-WEB-MIR"
    });
  }
}
