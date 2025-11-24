import { GoogleGenAI } from "@google/genai";
import { Language, AspectRatio } from "../types";

// Initialize the client strictly according to guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Step 1: Analyze the reference image to extract style, mood, and lighting.
 * Uses gemini-2.5-flash for fast multimodal analysis.
 */
export const analyzeImageStyle = async (base64Image: string, lang: Language): Promise<string> => {
  try {
    // Remove header if present for the API call
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|webp);base64,/, "");

    const langInstruction = lang === 'ru' 
      ? 'Provide the summary in Russian language.' 
      : 'Provide the summary in English language.';

    const prompt = `
      Analyze this image specifically for graphic design purposes. 
      Identify the following elements and list them clearly:
      1. Art Style (e.g., Cyberpunk, Minimalist, Grunge, Anime)
      2. Color Palette (specific hex codes or descriptive color names)
      3. Lighting composition (e.g., Neon glow, flat lighting, cinematic rim light)
      4. Texture details (e.g., Grainy, smooth, metallic, watercolor)
      
      Summarize this into a single, dense paragraph that describes the visual style to a blind artist.
      ${langInstruction}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: 'image/png',
              data: cleanBase64
            }
          }
        ]
      }
    });

    return response.text || "Failed to extract style description.";
  } catch (error: any) {
    console.error("Analysis failed", error);
    throw new Error(error.message || "Failed to analyze reference image");
  }
};

/**
 * Step 2: Generate the final Twitch asset using the User Prompt + Extracted Style + Reference Image.
 * Uses gemini-2.5-flash-image (NanoBanana).
 */
export const generateTwitchAsset = async (
  userPrompt: string,
  techAssetSpec: string, // Technical specs (e.g. "Twitch Offline Banner, 1920x1080")
  styleDescription: string,
  referenceImage: string,
  aspectRatio: AspectRatio
): Promise<string> => {
  try {
    const cleanBase64 = referenceImage.replace(/^data:image\/(png|jpeg|webp);base64,/, "");

    // Construct a merged prompt
    // Integrating specific instructions for transparency handling if the techAssetSpec implies it
    const finalPrompt = `
      Create a professional Twitch asset.
      Asset Type: ${techAssetSpec}
      
      User Description: ${userPrompt}
      
      STRICT STYLE ADHERENCE REQUIRED:
      ${styleDescription}
      
      Instructions:
      - The output must be high resolution and suitable for streaming.
      - Match the reference image's vibe exactly.
      - If a transparent background is implied by the asset type (e.g. overlays, alerts), use a solid contrasting background (like a green screen or pure black) that can be easily keyed out, or isolate the object centrally.
    `;

    // Using gemini-2.5-flash-image for generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: finalPrompt },
          {
            inlineData: {
              mimeType: 'image/png',
              data: cleanBase64
            }
          }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        }
      }
    });

    // Iterate parts to find the image as per guidelines
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image data found in response");

  } catch (error: any) {
    console.error("Generation failed", error);
    throw new Error(error.message || "Failed to generate design");
  }
};