import * as Dialog from '@radix-ui/react-dialog';
import {
   HeaderContainer,
   HeaderContent,
   NewTransactionsButton,
} from './styles';
import logoImage from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <img src={logoImage} alt='' />
            <Dialog.Root>
               <Dialog.Trigger asChild>
                  <NewTransactionsButton>Nova Transação</NewTransactionsButton>
               </Dialog.Trigger>
               <NewTransactionModal />
            </Dialog.Root>
         </HeaderContent>
      </HeaderContainer>
   );
}
