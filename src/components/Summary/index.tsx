import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';
import { valueFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
   const summary = useSummary();
   return (
      <SummaryContainer>
         <SummaryCard>
            <header>
               <span>Entradas</span>
               <ArrowCircleUp size={34} color='#15803d' />
            </header>
            <strong>{valueFormatter.format(summary.income)}</strong>
         </SummaryCard>
         <SummaryCard>
            <header>
               <span>Saídas</span>
               <ArrowCircleDown size={34} color='#BF4444' />
            </header>
            <strong>{valueFormatter.format(summary.outcome)}</strong>
         </SummaryCard>
         <SummaryCard variant='green'>
            <header>
               <span>Total</span>
               <CurrencyDollar size={34} color='#fff' />
            </header>
            <strong>{valueFormatter.format(summary.total)}</strong>
         </SummaryCard>
      </SummaryContainer>
   );
}
