import * as Dialog from '@radix-ui/react-dialog';
import {
   HeaderContainer,
   HeaderContent,
   NewTransactionsButton,
   SwitchThemeContainer,
   SwitchThemeRoot,
   SwitchThemeThumb,
} from './styles';
import logoImage from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { Palette } from 'phosphor-react';
import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../../contexts/ThemeContext';

export function Header() {
   const { toggleTheme, theme } = useContext(ThemeContext);

   const isDarkMode = theme === ThemeType.dark;

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
         <SwitchThemeContainer>
            <Palette size={26} />
            <label>Tema</label>
            <SwitchThemeRoot checked={isDarkMode} onCheckedChange={toggleTheme}>
               <SwitchThemeThumb />
            </SwitchThemeRoot>
         </SwitchThemeContainer>
      </HeaderContainer>
   );
}
