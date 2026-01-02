import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

// Initialize Gemini Client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (
  businessName: string,
  businessType: string,
  goal: string
): Promise<StrategyResponse> => {
  
  const prompt = `
    You are an expert marketing strategist for the Nepali market (NepAI Marketing).
    
    Business Name: ${businessName}
    Business Type: ${businessType}
    Primary Goal: ${goal}

    Generate a concise, high-impact marketing strategy specifically tailored for a Nepali audience.
    Keep the tone professional yet accessible.
    
    Return the response in JSON format matching the following schema:
    {
      "headline": "A catchy one-sentence strategy summary",
      "platforms": ["List of 2-3 best platforms e.g. Facebook, TikTok, Hamro Patro"],
      "hook": "A sample ad hook or content idea in English (or Nepali Romanized if appropriate)",
      "advice": "One specific actionable tip for the Nepali market"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            platforms: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            hook: { type: Type.STRING },
            advice: { type: Type.STRING }
          },
          required: ["headline", "platforms", "hook", "advice"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as StrategyResponse;

  } catch (error) {
    console.error("Error generating strategy:", error);
    // Fallback response in case of API error or quota limits
    return {
      headline: "Optimize your digital presence for local trust.",
      platforms: ["Facebook", "Instagram", "TikTok"],
      hook: "Focus on storytelling that resonates with Nepali culture.",
      advice: "Ensure your call-to-action is clear and offers immediate value."
    };
  }
};

export const generateChatResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  const systemContext = `
    You are 'NepAI Assistant', the smart AI support for "NepAI Marketing" in Kathmandu.
    
    YOUR GOAL:
    Provide organized, crisp, and helpful answers. Guide users to book a "Free Strategy Call".

    CRITICAL INSTRUCTION:
    **ALWAYS finish your sentences.** Do not cut off. If a topic is complex, summarize it briefly to ensure the response fits, but never leave an answer incomplete.

    CORE VALUE:
    We use AI to optimize marketing, reducing wasted ad spend and increasing real sales for Nepali businesses.

    SERVICES (Reference for answers):
    • **AI Paid Ads**: Smart budget management for Facebook, Instagram, & Google.
    • **Content & Video**: Scripts and editing for viral Reels/TikToks tailored to Nepal.
    • **Landing Pages**: Fast, mobile-first sites built for conversions.
    • **Analytics**: Clear reporting on ROI and Cost Per Lead.
    
    CONTACT DETAILS:
    • Phone/WhatsApp: +977-9808493504
    • Email: nepaiagency2026@gmail.com

    RESPONSE GUIDELINES:
    1. **Structure**: Use **bullet points** (•) for lists to keep things organized.
    2. **Formatting**: Use **bold text** for important keywords.
    3. **Brevity**: Keep explanations direct. Avoid fluff, but ensure the main point is fully explained.
    4. **Completeness**: Ensure the thought is finished.
    5. **Tone**: Professional, energetic, and culturally aware (e.g., occasional "Namaste").
    6. **Call to Action**: If relevant, suggest booking a "Free Strategy Call" via WhatsApp at +977-9808493504.

    Example Output Style:
    "Namaste! regarding pricing:
    
    • **Custom Quotes**: Pricing depends on your goals and ad spend.
    • **Free Strategy Call**: We offer a free consultation via WhatsApp to give you an exact estimate.
    
    Would you like to chat on WhatsApp?"
  `;

  try {
    // Combine history with the new user message
    const contents = [
      ...history,
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: systemContext,
        maxOutputTokens: 1000, // Increased to ensure completeness
      }
    });

    const text = response.text;
    if (!text) {
        return "I didn't quite catch that. Could you please say it again?";
    }
    return text;
  } catch (error) {
    console.error("Chat error:", error);
    return "Namaste! I seem to be offline momentarily. Please call us directly at +977-9808493504 for immediate assistance.";
  }
};