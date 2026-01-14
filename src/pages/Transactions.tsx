import { useStore } from '../store';
import { formatCurrency, formatDate } from '../utils/formatters';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const Transactions = () => {
  const { transactions, accounts } = useStore();

  const sortedTransactions = [...transactions].sort(
    (a, b) =>
      new Date(b.transactionDate).getTime() -
      new Date(a.transactionDate).getTime()
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Transactions</h2>
        <p className="text-gray-600">View all your recent transactions.</p>
      </div>

      {sortedTransactions.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No transactions found</p>
        </div>
      ) : (
        <div className="space-y-2">
          {sortedTransactions.map((txn) => {
            const account = accounts.find((a) => a.id === txn.accountId);
            const isDebit = txn.type === 'debit';

            return (
              <div
                key={txn.id}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        isDebit ? 'bg-red-100' : 'bg-green-100'
                      }`}
                    >
                      {isDebit ? (
                        <TrendingDown size={20} className="text-red-600" />
                      ) : (
                        <TrendingUp size={20} className="text-green-600" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 truncate">
                        {txn.merchantName}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {account?.bankName} • {account?.accountNumber}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p
                      className={`font-semibold text-lg ${
                        isDebit ? 'text-red-600' : 'text-green-600'
                      }`}
                    >
                      {isDebit ? '-' : '+'}
                      {formatCurrency(txn.amount)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDate(new Date(txn.transactionDate))}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
