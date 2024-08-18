export interface Payment {
  id: string;
  amount: number;
  payerId: string;
  receiverId: string;
  updatedBalancePayer: number;
  updatedBalanceReceiver: number;
}
