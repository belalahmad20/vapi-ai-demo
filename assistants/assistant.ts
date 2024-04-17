import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const assistant = ({
  name,
  grade,
  prompt,
}: {
  name: string;
  grade: string;
  prompt?: string;
}): CreateAssistantDTO | any => {
  const _prompt =
    prompt ??
    `You're Sarah, an English teacher who helps students of different grades to help them improve their english. Ask them variety of questions regarding day to day life, keeping their grade in mind. After they answer, correct their mistakes if they made any while answering your questions. Move to the next question without waiting for a acknowledgment.`;

  return {
    name: "English Teacher",
    model: {
      provider: "openai",
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      systemPrompt: `${_prompt}. Right now you're talking with, ${name} who is a ${grade} grade student.`,
    },
    voice: {
      provider: "11labs",
      voiceId: "sarah",
    },
    firstMessage: `Hello ${name}. I'm Sarah, your English teacher. I am going to conduct a quick test to check your English skills. Are you ready?`,
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
  };
};
