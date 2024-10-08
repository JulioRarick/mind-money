import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
   position: fixed;
   width: 100vw;
   height: 100vh;
   inset: 0;
   background: rgba(0, 0, 0, 0.65);
`;
export const Title = styled(Dialog.Title)`
   color: ${(props) => props.theme.white};
`;
export const Content = styled(Dialog.Content)`
   min-width: 32rem;
   border-radius: 6px;
   padding: 2.5rem 3rem;
   background: ${(props) => props.theme['green-300']};

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   form {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
         border-radius: 6px;
         border: 0;
         background: ${(props) => props.theme['gray-300']};
         color: ${(props) => props.theme['gray-900']};
         padding: 1rem;
         &::placeholder {
            color: ${(props) => props.theme['gray-500']};
         }
      }

      select {
         border-radius: 6px;
         border: 0;
         background: ${(props) => props.theme['gray-300']};
         color: ${(props) => props.theme['gray-900']};
         padding: 1rem;
         font-size: 1rem;
         font-weight: 200;
         color: ${(props) => props.theme['gray-500']};
      }

      button[type='submit'] {
         height: 58px;
         border: 0;
         background: ${(props) => props.theme['green-900']};
         color: ${(props) => props.theme['yellow-300']};
         font-weight: 600;
         padding: 0 1.25rem;
         border-radius: 6px;
         margin-top: 1.5rem;
         cursor: pointer;
         transition: 0.3s ease-in-out;

         &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
         }

         &:not(:disabled):hover {
            background: ${(props) => props.theme['green-600']};
         }
      }
   }

   @media (max-width: 500px) {
      min-width: auto;
      width: 90%;
      padding: 1.5rem 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
`;

export const CloseButton = styled(Dialog.Close)`
   position: absolute;
   background: transparent;
   border: 0;
   top: 1.5rem;
   right: 1.5rem;
   line-height: 0;
   cursor: pointer;
   color: ${(props) => props.theme['gray-300']};
   transition: 0.3s ease-in-out;

   &:hover {
      scale: 1.1;
   }
`;
export const TransactionType = styled(RadioGroup.Root)`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 1rem;
   margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
   variant: 'income' | 'outcome';
}
//prettier-ignore
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
   background: ${(props) => props.theme['green-500']};
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem;
   gap: 0.5rem;
   border-radius: 6px;
   cursor: pointer;
   border: 0;
   color: ${(props) => props.theme.white};

   svg {
      color: ${(props) =>
         props.variant === 'income'
            ? props.theme['green-100']
            : props.theme['red-300']};
   }
   &[data-state='unchecked']:hover {
      transition: background-color 0.3s;
      background: ${(props) => props.theme['green-900']};
   }
   &[data-state='checked'] {
      background: ${(props) =>
         props.variant === 'income'
            ? props.theme['green-800']
            : props.theme['red-700']};
      svg{
        color: ${props => props.theme.white};
      }
   }
`;
