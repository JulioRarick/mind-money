import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
   return (
      <SummaryContainer>
         <SummaryCard>
            <header>
               <span>Entradas</span>
               <ArrowCircleUp size={34} color='#22c55e' />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
         <SummaryCard>
            <header>
               <span>Saídas</span>
               <ArrowCircleDown size={34} color='#ef4444' />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
         <SummaryCard variant='green'>
            <header>
               <span>Total</span>
               <CurrencyDollar size={34} color='#fff' />
            </header>
            <strong>R$ 17.400,00</strong>
         </SummaryCard>
      </SummaryContainer>
   );
}
