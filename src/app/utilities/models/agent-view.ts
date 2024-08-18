export interface AgentView {
  players: AgentPlayerData[];
  rakePercentage: number;
}

export interface AgentPlayerData {
  username: string;
  playerName: string;
  balance: string;
  weeklyRake: number;
  agentRakePercentage: number;
  agentActualRake: number;
}
