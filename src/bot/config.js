import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'PhilosopherBot',
  initialMessages: [createChatBotMessage(`Hello! I am PhilosopherBot, your guide to the world of philosophy. Ask me anything about philosophical concepts, famous philosophers, or philosophical questions!`)],
};

export default config;