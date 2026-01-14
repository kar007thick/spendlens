import { Account, Transaction } from '../types';

const mockAccounts: Account[] = [
  {
    id: 'acc-1',
    bankName: 'Chase Bank',
    accountNumber: '****1234',
    balance: 4285.50,
    balanceSource: 'sms',
  },
  {
    id: 'acc-2',
    bankName: 'Bank of America',
    accountNumber: '****5678',
    balance: 8920.75,
    balanceSource: 'sms',
  },
  {
    id: 'acc-3',
    bankName: 'Wells Fargo',
    accountNumber: '****9012',
    balance: 2145.30,
    balanceSource: 'calculated',
  },
];

const mockTransactions: Transaction[] = [
  {
    id: 'txn-1',
    merchantName: 'Starbucks',
    amount: 5.80,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 14),
    type: 'debit',
  },
  {
    id: 'txn-2',
    merchantName: 'Amazon',
    amount: 45.99,
    accountId: 'acc-2',
    transactionDate: new Date(2026, 0, 14),
    type: 'debit',
  },
  {
    id: 'txn-3',
    merchantName: 'Salary Deposit',
    amount: 3500.00,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 13),
    type: 'credit',
  },
  {
    id: 'txn-4',
    merchantName: 'Whole Foods',
    amount: 87.42,
    accountId: 'acc-2',
    transactionDate: new Date(2026, 0, 12),
    type: 'debit',
  },
  {
    id: 'txn-5',
    merchantName: 'Netflix',
    amount: 15.99,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 10),
    type: 'debit',
  },
  {
    id: 'txn-6',
    merchantName: 'Gas Station',
    amount: 52.30,
    accountId: 'acc-3',
    transactionDate: new Date(2026, 0, 9),
    type: 'debit',
  },
  {
    id: 'txn-7',
    merchantName: 'Target',
    amount: 125.43,
    accountId: 'acc-2',
    transactionDate: new Date(2026, 0, 8),
    type: 'debit',
  },
  {
    id: 'txn-8',
    merchantName: 'Uber',
    amount: 28.50,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 7),
    type: 'debit',
  },
  {
    id: 'txn-9',
    merchantName: 'Restaurant XYZ',
    amount: 68.25,
    accountId: 'acc-3',
    transactionDate: new Date(2026, 0, 6),
    type: 'debit',
  },
  {
    id: 'txn-10',
    merchantName: 'Apple iTunes',
    amount: 9.99,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 5),
    type: 'debit',
  },
  {
    id: 'txn-11',
    merchantName: 'Gym Membership',
    amount: 49.99,
    accountId: 'acc-2',
    transactionDate: new Date(2026, 0, 4),
    type: 'debit',
  },
  {
    id: 'txn-12',
    merchantName: 'Refund',
    amount: 25.00,
    accountId: 'acc-1',
    transactionDate: new Date(2026, 0, 3),
    type: 'credit',
  },
  {
    id: 'txn-13',
    merchantName: 'Pharmacy',
    amount: 32.15,
    accountId: 'acc-2',
    transactionDate: new Date(2026, 0, 2),
    type: 'debit',
  },
  {
    id: 'txn-14',
    merchantName: 'Hotel Booking',
    amount: 250.00,
    accountId: 'acc-3',
    transactionDate: new Date(2025, 11, 31),
    type: 'debit',
  },
  {
    id: 'txn-15',
    merchantName: 'Online Store',
    amount: 89.50,
    accountId: 'acc-1',
    transactionDate: new Date(2025, 11, 30),
    type: 'debit',
  },
];

export const getAccounts = async (): Promise<Account[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockAccounts), 300);
  });
};

export const getTransactions = async (): Promise<Transaction[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockTransactions), 300);
  });
};
