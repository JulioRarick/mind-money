import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transactions {
   id: number;
   description: string;
   type: 'income' | 'outcome';
   value: number;
   category: string;
   createdAt: string;
}
interface CreateTransactionsInputs {
   description: string;
   value: number;
   category: string;
   type: 'income' | 'outcome';
}
interface TransactionsContextType {
   transactions: Transactions[];
   fetchTransactions: (query?: string) => Promise<void>;
   createTransactions: (data: CreateTransactionsInputs) => Promise<void>;
}
interface TransactionsProviderProps {
   children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   const [transactions, setTransactions] = useState<Transactions[]>([]);

   async function fetchTransactions(query?: string) {
      const response = await api.get('transactions', {
         params: {
            _sort: 'createdAt',
            _order: 'desc',
            q: query,
         },
      });
      setTransactions(response.data);
   }

   async function createTransactions(data: CreateTransactionsInputs) {
      const { description, category, value, type } = data;

      const response = await api.post('transactions', {
         description,
         category,
         value,
         type,
         createdAt: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
   }

   useEffect(() => {
      fetchTransactions();
   }, []);

   return (
      <TransactionsContext.Provider
         value={{ transactions, fetchTransactions, createTransactions }}
      >
         {children}
      </TransactionsContext.Provider>
   );
}
