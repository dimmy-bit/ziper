
import { GoogleGenAI } from "@google/genai";

/**
 * ZIPER AI Service - Powered by Google Gemini 2.5 Flash Image
 * High-performance, professional-grade image transformation.
 */
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
   * Transforms the user image using Gemini 2.5 Flash Image.
   * This performs a real multimodal transformation (Image + Prompt -> New Image).
   */
  public async transformImage(base64WithHeader: string, stylePrompt: string): Promise<string> {
    try {
      // 1. Initialize the official Google GenAI client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

      // 2. Prepare the image data (Strip the "data:image/png;base64," prefix)
      const base64Data = base64WithHeader.split(',')[1];
      const mimeType = base64WithHeader.split(';')[0].split(':')[1] || 'image/png';

      // 3. Call the Gemini 2.5 Flash Image model
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: `Reimagine this person/subject in the following artistic style: ${stylePrompt}. 
                     Maintain the core features, pose, and identity of the subject but apply the textures and aesthetic of the style perfectly. 
                     The output must be a single high-quality image.`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      // 4. Extract the generated image from the response parts
      let resultBase64 = '';
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            resultBase64 = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (!resultBase64) {
        throw new Error("The AI did not return an image part. Please try a different style.");
      }

      return resultBase64;

    } catch (error: any) {
      console.error("Gemini Transformation Error:", error);
      // Friendly error handling for the UI
      if (error.message?.includes('429')) throw new Error("Rate limit exceeded. Please wait a minute.");
      if (error.message?.includes('401')) throw new Error("System configuration error. Please contact support.");
      throw new Error(error.message || "Transformation failed. Please try a different photo.");
    }
  }

  /**
   * Logs system performance for the console.
   */
  public async logGeneration(data: { style: string; status: string; timestamp?: number; error_type?: string }) {
    console.log("ZIPER LOG:", {
      ...data,
      engine: "Gemini_2.5_Flash_Image",
      timestamp: data.timestamp || Date.now()
    });
  }
}
