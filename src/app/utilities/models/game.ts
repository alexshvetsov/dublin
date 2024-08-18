export interface Game {
  id: string;
  gameNum: string;
  gameType: string;
  result: number;
  date: Date;
  rake: number;
}

export interface GameView {
  GameCode: string;
  DateStarted: Date;
  DateEnded: Date;
  GameType: string;
  BigBlind: number;
  TotalTips: number;
}
