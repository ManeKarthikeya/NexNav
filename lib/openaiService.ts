import OpenAI from 'openai';

export class OpenAIService {
  private static instance: OpenAI;

  public static getClient(): OpenAI {
    if (!this.instance) {
      this.instance = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: process.env.OPENROUTER_API_KEY,
      });
    }
    return this.instance;
  }
}