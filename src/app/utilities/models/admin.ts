import { Agent } from './agent';

export interface Admin extends Agent {
  isAdmin: true;
}
