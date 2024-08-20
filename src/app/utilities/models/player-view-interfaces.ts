export interface PlayerView {
  name: string;
  nickname: string;
  agentPhoneNumber?: string;
  agentName?: string;
  weeklyBalance: number;
  totalBalance: number;
}
export interface GamePlayerView {
  id: number;
  gameType: string;
  result: number;
  createdTime: Date;
}
export interface AgentPlayerView extends PlayerView {
  weeklyRake: number;
}

export interface GameAgentPlayerView extends GamePlayerView {
  rake: number;
}
export interface AdminPlayerView extends AgentPlayerView {
  userType: string;
  firstName: string;
  familyName: string;
  phoneNumber: string;
  phoneId: string;
  agentId: string;
  adminId: string;
  nickname: string;
  createdDate: Date;
  updatedDate: Date;
}
export interface GameAdminPlayerView extends GamePlayerView {}
