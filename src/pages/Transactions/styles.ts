import styled from 'styled-components';

export const TransactionsContainer = styled.main`
   width: 100%;
   max-width: 1120px;
   margin: 1.5rem auto 0;
   padding: 0 1.5rem;
   @media (max-width: 600px) {
      margin: 1.5rem auto 0;
   }
`;
export const TransactionsTable = styled.table`
   width: 100%;
   border-collapse: separate;
   border-spacing: 0 0.5rem;
   margin-top: 1.5rem;
`;
export const TableRow = styled.tr`
   @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
   }
`;
export const FirstTableData = styled.td`
   border-top-left-radius: 6px;
   border-bottom-left-radius: 6px;
   padding: 1.25rem 2rem;
   width: 50%;
   background: ${(props) => props.theme['gray-300']};
   @media (max-width: 600px) {
      grid-area: 1 / 1 / 2 / 3;
      border-radius: 6px 6px 0px 0px;
      width: 22rem;
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
   }
`;
export const SecondTableData = styled.td`
   display: block;
   padding: 1.25rem 2rem;
   background: ${(props) => props.theme['gray-300']};
   @media (max-width: 600px) {
      grid-area: 2 / 1 / 3 / 3;
      width: 22rem;
      font-size: 1.2rem;
      text-align: center;
      font-weight: bold;
   }
`;
export const ThirdTableData = styled.td`
   padding: 1.25rem 2rem;
   background: ${(props) => props.theme['gray-300']};
   @media (max-width: 600px) {
      text-align: start;
      padding-top: 0.5rem;
      padding-left: 3rem;
      grid-area: 3 / 1 / 4 / 2;
      border-radius: 0px 0px 0px 6px;
      margin-bottom: 1rem;
   }
`;
export const ForthTableData = styled.td`
   padding: 1.25rem 2rem;
   background: ${(props) => props.theme['gray-300']};
   border-top-right-radius: 6px;
   border-bottom-right-radius: 6px;
   @media (max-width: 600px) {
      text-align: end;
      padding-top: 0.5rem;
      padding-right: 2rem;
      grid-area: 3 / 2 / 4 / 3;
      border-radius: 0px 0px 6px 0px;
      margin-bottom: 1rem;
   }
`;

interface PriceHighlightProps {
   variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
   color: ${(props) =>
      props.variant === 'income'
         ? props.theme['green-200']
         : props.theme['red-500']};
`;
