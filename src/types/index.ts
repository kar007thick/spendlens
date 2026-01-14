export interface Account {
  id: string;
  bankName: string;
  accountNumber: string;
  balance: number;
  balanceSource: 'sms' | 'calculated';
}

export interface Transaction {
  id: string;
  merchantName: string;
  amount: number;
  accountId: string;
  transactionDate: Date;
  type: 'debit' | 'credit';
}

export interface AppState {
  accounts: Account[];
  transactions: Transaction[];
  selectedMonth: Date;
}
