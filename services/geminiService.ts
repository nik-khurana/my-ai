
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION, RESUME_DATA } from "../constants";

// The API key is assumed to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

export const initializeChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `${SYSTEM_INSTRUCTION}\n\nHere is Nikhil's resume data:\n${RESUME_DATA}`,
    },
  });
};

export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  try {
    const result = await chatSession!.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please check if your API key is valid or try again in a moment.";
  }
};
