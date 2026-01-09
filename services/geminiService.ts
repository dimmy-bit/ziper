
/**
 * ZIPER AI Service - Powered by Pollinations AI
 * Fast, browser-safe, and zero-config image generation.
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
   * Generates a stylized image using Pollinations AI.
   * Constructed as a GET request to avoid CORS and API key dependencies.
   */
  public async transformImage(_base64Image: string, prompt: string): Promise<string> {
    try {
      // 1. Generate a random seed for uniqueness
      const seed = Math.floor(Math.random() * 1000000);
      
      // 2. Enhance the prompt for Pollinations/Flux models
      const enhancedPrompt = encodeURIComponent(
        `${prompt}, highly detailed, 8k, professional photography, cinematic lighting, masterpiece`
      );

      // 3. Construct the Pollinations URL (512x512 as requested)
      const imageUrl = `https://pollinations.ai/p/${enhancedPrompt}?width=512&height=512&seed=${seed}&model=flux&nologo=true`;

      // 4. Professional Preloader: We "await" the actual image loading 
      // so the UI spinner doesn't disappear before the pixels arrive.
      await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(imageUrl);
        img.onerror = () => reject(new Error("The AI generation timed out. Please try again."));
        // Set a timeout for safety
        setTimeout(() => reject(new Error("Connection unstable. Please check your network.")), 15000);
        img.src = imageUrl;
      });

      return imageUrl;
    } catch (error: any) {
      console.error("Pollinations Generation Error:", error);
      throw error;
    }
  }

  /**
   * Logs generation metadata for analytics.
   */
  public async logGeneration(data: { style: string; status: string; timestamp?: number; error_type?: string }) {
    console.log("ZIPER Analytics:", {
      ...data,
      timestamp: data.timestamp || Date.now(),
      engine: "Pollinations_Flux_512"
    });
  }
}
