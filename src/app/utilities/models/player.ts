import { Game } from './game';

export interface Player {
  id: string;
  fullName: string;
  inGameName: string;
  weeklyBalance: number;
  totalBalance: number;
  weeklyRake: number;
  phoneNumber: string;
  games?: string[];
  agentId: string;
  adminName: string;
  createDate: Date;
  updatedDated: Date;
}
