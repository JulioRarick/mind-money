import { ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { createContext } from 'use-context-selector';

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
   // function saveTransactionsToLocalStorage(transactions: Transactions[]) {
   //    localStorage.setItem(
   //       '@mind-money:transactions',
   //       JSON.stringify(transactions)
   //    );
   // }
   // function loadTransactionsFromLocalStorage(): Transactions[] {
   //    const storedTransactions = localStorage.getItem('transactions');
   //    if (storedTransactions) {
   //       return JSON.parse(storedTransactions);
   //    }
   //    return [];
   // }
   // async function fetchTransactions(query?: string) {
   //    const localTransactions = loadTransactionsFromLocalStorage();
   //    if (query) {
   //       const filteredTransactions = localTransactions.filter((transaction) =>
   //          transaction.description.toLowerCase().includes(query.toLowerCase())
   //       );
   //       setTransactions(filteredTransactions);
   //    } else {
   //       setTransactions(localTransactions);
   //    }
   // }
   // async function createTransactions(data: CreateTransactionsInputs) {
   //    const { description, category, value, type } = data;
   //    const newTransaction = {
   //       id: new Date().getTime(),
   //       description,
   //       category,
   //       value,
   //       type,
   //       createdAt: new Date().toISOString(),
   //    };

   //    setTransactions((state) => {
   //       const newTransactions = [newTransaction, ...state];
   //       saveTransactionsToLocalStorage(newTransactions);
   //       return newTransactions;
   //    });
   // }

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
