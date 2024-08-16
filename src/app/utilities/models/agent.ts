import { Player } from './player';

export interface Agent extends Player {
  rakePercentage: number;
  players: Player[];
}
