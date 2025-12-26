
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum BotState {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  ERROR = 'ERROR'
}
