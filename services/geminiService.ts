
/**
 * ZIPER AI Service - Powered by Pollinations AI
 * 100% Browser-safe. Zero CORS issues. No API keys required.
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
   * Generates a high-quality stylized image.
   * Uses Pollinations AI via simple GET request to ensure no CORS or API limits.
   */
  public async transformImage(_base64Image: string, prompt: string): Promise<string> {
    try {
      // 1. Create a unique seed so every click gives a fresh result
      const seed = Math.floor(Math.random() * 9999999);
      
      // 2. Clean and encode the prompt
      const finalPrompt = encodeURIComponent(prompt);

      // 3. Construct the Pollinations URL 
      // We use width/height 512 for speed and the 'flux' model for premium quality.
      const imageUrl = `https://pollinations.ai/p/${finalPrompt}?width=512&height=512&seed=${seed}&model=flux&nologo=true`;

      // 4. PRELOADER: This is the "magic" part. 
      // It waits for the image to actually finish generating before showing it.
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        // Give the AI 20 seconds to finish the render
        const timeout = setTimeout(() => {
          reject(new Error("Generation timed out. Please try again."));
        }, 20000);

        img.onload = () => {
          clearTimeout(timeout);
          resolve(imageUrl);
        };

        img.onerror = () => {
          clearTimeout(timeout);
          reject(new Error("AI Engine is temporarily busy. Please try again in 5 seconds."));
        };

        // Start the browser's native download of the AI result
        img.src = imageUrl;
      });

    } catch (error: any) {
      console.error("ZIPER Generation Error:", error);
      throw error;
    }
  }

  /**
   * Analytics logging (Purely for console visibility)
   */
  public async logGeneration(data: { style: string; status: string; timestamp?: number; error_type?: string }) {
    console.log("ZIPER SYSTEM LOG:", {
      ...data,
      engine: "Pollinations_Flux_V3",
      timestamp: data.timestamp || Date.now()
    });
  }
}
