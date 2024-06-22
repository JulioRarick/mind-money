import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useSummary() {
   const { transactions } = useContext(TransactionsContext);

   const summary = transactions.reduce(
      (accumulator, transaction) => {
         if (transaction.type === 'income') {
            accumulator.income += transaction.value;
            accumulator.total += transaction.value;
         } else {
            accumulator.outcome += transaction.value;
            accumulator.total -= transaction.value;
         }

         return accumulator;
      },
      {
         income: 0,
         outcome: 0,
         total: 0,
      }
   );
   return summary;
}
