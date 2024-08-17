export enum UserType {
  Admin = 'admin',
  Agent = 'agent',
  Player = 'player',
}

export const userRoutes: { [key: string]: string } = {
  agent: '/players',
  admin: '/players',
  player: '/players/',
};
