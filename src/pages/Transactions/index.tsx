import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import {
   PriceHighlight,
   FirstTableData,
   SecondTableData,
   TableRow,
   TransactionsContainer,
   TransactionsTable,
   ThirdTableData,
   ForthTableData,
} from './styles';
import { dateFormatter, valueFormatter } from '../../utils/formatter';
import { useContextSelector } from 'use-context-selector';

export function Transactions() {
   const transactions = useContextSelector(TransactionsContext, (context) => {
      return context.transactions;
   });
   return (
      <div>
         <Header />
         <Summary />
         <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
               <tbody>
                  {transactions.map((transaction) => {
                     return (
                        <TableRow key={transaction.id}>
                           <FirstTableData>
                              {transaction.description}
                           </FirstTableData>
                           <SecondTableData>
                              <PriceHighlight variant={transaction.type}>
                                 {transaction.type === 'outcome' && '- '}
                                 {valueFormatter.format(transaction.value)}
                              </PriceHighlight>
                           </SecondTableData>
                           <ThirdTableData>
                              {transaction.category}
                           </ThirdTableData>
                           <ForthTableData>
                              {dateFormatter.format(
                                 new Date(transaction.createdAt)
                              )}
                           </ForthTableData>
                        </TableRow>
                     );
                  })}
               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   );
}
