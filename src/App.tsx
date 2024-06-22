import { GlobalStyle } from './styles/global';
import { Transactions } from './pages/Transactions';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
   return (
      <ThemeProvider>
         <GlobalStyle />
         <TransactionsProvider>
            <Transactions />
         </TransactionsProvider>
      </ThemeProvider>
   );
}
