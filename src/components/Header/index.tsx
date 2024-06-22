import {
   HeaderContainer,
   HeaderContent,
   NewTransactionsButton,
} from './styles';
import logoImage from '../../assets/logo.svg';

export function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <img src={logoImage} alt='' />
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
         </HeaderContent>
      </HeaderContainer>
   );
}
