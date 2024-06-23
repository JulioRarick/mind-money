import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
   width: 100%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 0 1.5rem;

   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;

   margin-top: -5rem;

   @media (max-width: 600px) {
      margin-top: -4rem;
      overflow-x: scroll;
      gap: 1rem;
   }
`;

interface SummaryCardProps {
   variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
   background: ${(props) => props.theme['gray-700']};
   color: ${(props) => props.theme.white};
   border-radius: 6px;
   padding: 2rem;

   header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => props.theme['gray-200']};
      font-size: 1.1rem;
   }
   span {
      color: ${(props) => props.theme['yellow-300']};
   }
   strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
   }

   ${(props) =>
      props.variant === 'green' &&
      css`
         background: ${(props) => props.theme['green-500']};
      `}
   @media (max-width: 600px) {
      padding: 1rem;
      width: 15rem;
      height: 7rem;
      header {
         font-size: 1rem;
      }
      strong {
         font-size: 1.7rem;
      }
      svg {
         width: 1.5rem;
         margin-left: 0.4rem;
      }
   }
`;
