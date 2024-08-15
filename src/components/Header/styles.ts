import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
   background: ${(props) => props.theme['gray-300']};
   padding: 2.5rem 0 7.5rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

   @media (max-width: 600px) {
      padding: 2.5rem 0 6rem;
   }
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
export const SwitchThemeContainer = styled.div`
   width: 100%;
   max-width: 1120px;
   margin: 0.2rem auto;
   padding: 0 3.2rem;

   display: flex;
   align-items: center;
   justify-content: end;
`;
export const SwitchThemeRoot = styled(Switch.Root)`
   width: 42px;
   height: 25px;
   background-color: ${(props) => props.theme['gray-700']};
   border-radius: 9999px;
   position: relative;
   border: 0;
   margin-left: 0.5rem;
   box-shadow: 0 2px 10px ${(props) => props.theme['gray-500']};
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme['gray-300']};
   }
   &[data-state='checked'] {
      background-color: ${(props) => props.theme['gray-500']};
   }
`;
export const SwitchThemeThumb = styled(Switch.Thumb)`
   display: block;
   width: 21px;
   height: 21px;
   background-color: white;
   border-radius: 9999px;
   box-shadow: 0 2px 2px var(--black-a7);
   transition: transform 100ms;
   transform: translateX(2px);
   will-change: transform;

   &[data-state='checked'] {
      transform: translateX(19px);
   }
`;
