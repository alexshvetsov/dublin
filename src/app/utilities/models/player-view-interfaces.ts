export interface PlayerView {
  name: string;
  nickname: string;
  agentPhoneNumber: string;
  agentName: string;
  weeklyBalance: string;
  totalBalance: string;
}
export interface GamePlayerView {
  id: number;
  gameType: string;
  result: number;
  date: Date;
}
export interface AgentPlayerView {}
export interface GameAgentPlayerView {}
export interface AdminPlayerView {}
export interface GameAdminPlayerView {}
