import styled from 'styled-components';

export const SearchFormContainer = styled.form`
   display: flex;
   gap: 1rem;

   input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-500']};
      padding: 1rem;

      &::placeholder {
         color: ${(props) => props.theme['gray-500']};
      }
   }
   button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      border: 0;
      background: transparent;
      padding: 1rem;
      border: 1px solid ${(props) => props.theme['green-400']};
      color: ${(props) => props.theme['green-400']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:disabled {
         opacity: 0.7;
         cursor: not-allowed;
      }

      &:not(:disabled):hover {
         background: ${(props) => props.theme['green-500']};
         border-color: 1px solid ${(props) => props.theme['green-500']};
         color: ${(props) => props.theme.white};
      }
   }
`;
