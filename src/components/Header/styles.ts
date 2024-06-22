import styled from 'styled-components';

export const HeaderContainer = styled.header`
   background: ${(props) => props.theme['gray-300']};
   padding: 2.5rem 0 7.5rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const HeaderContent = styled.div`
   width: 100%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 0 1.5rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   img {
      width: 4.38rem;
      transition: 0.3s ease-in-out;
      &:hover {
         scale: 1.1;
      }
   }
`;
export const NewTransactionsButton = styled.button`
   height: 50px;
   border: 0;
   background: ${(props) => props.theme['green-400']};
   color: ${(props) => props.theme.white};
   font-weight: bold;
   padding: 0 1.25rem;
   border-radius: 6px;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   cursor: pointer;
   transition: 0.3s ease-in-out;
   &:hover {
      background: ${(props) => props.theme['green-500']};
   }
`;
