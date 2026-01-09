
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static instance: GeminiService;
  private ai: GoogleGenAI;

  private constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  /**
   * Transforms an image based on a style prompt
   */
  public async transformImage(base64Image: string, prompt: string): Promise<string> {
    const model = 'gemini-2.5-flash-image';
    
    // Clean base64 string
    const data = base64Image.split(',')[1] || base64Image;
    const mimeType = base64Image.match(/data:([^;]+);/)?.[1] || 'image/png';

    try {
      const response = await this.ai.models.generateContent({
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
              text: `${prompt}. Keep the original subject's facial features and overall structure recognizable. Ensure professional quality.`,
            },
          ],
        },
      });

      let imageUrl = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (!imageUrl) {
        throw new Error("No image was returned from the AI model.");
      }

      return imageUrl;
    } catch (error) {
      console.error("Gemini transformation error:", error);
      throw error;
    }
  }

  /**
   * Simulates a Neon DB log
   */
  public async logGeneration(data: any) {
    // In a real production app, this would call a secure backend endpoint
    // that interacts with Neon PostgreSQL.
    console.log("Logging generation to ZIPER analytics:", data);
  }
}
