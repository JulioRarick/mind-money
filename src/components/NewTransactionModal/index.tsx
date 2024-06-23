import {
   CloseButton,
   Content,
   Overlay,
   Title,
   TransactionType,
   TransactionTypeButton,
} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';
import * as Dialog from '@radix-ui/react-dialog';

const newTransactionFormSchema = z.object({
   description: z.string(),
   value: z.number(),
   category: z.string(),
   type: z.enum(['income', 'outcome']),
});
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
   const createTransactions = useContextSelector(
      TransactionsContext,
      (context) => {
         return context.createTransactions;
      }
   );

   const {
      control,
      register,
      reset,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormSchema),
   });

   async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
      const { description, value, category, type } = data;

      await createTransactions({
         description,
         value,
         category,
         type,
      });
      reset();
   }

   return (
      <Dialog.Portal>
         <Overlay />
         <Content>
            <Title>Nova transação</Title>
            <CloseButton>
               <X size={24} />
            </CloseButton>
            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
               <input
                  type='text'
                  placeholder='Descrição'
                  required
                  {...register('description')}
               />
               <input
                  type='number'
                  placeholder='Valor'
                  required
                  {...register('value', { valueAsNumber: true })}
               />
               <select required {...register('category')}>
                  <option value='Alimentação'>Alimentação</option>
                  <option value='Água'>Água</option>
                  <option value='Cartão'>Cartão</option>
                  <option value='Energia'>Energia</option>
                  <option value='Educação'>Educação</option>
                  <option value='Internet'>Internet</option>
                  <option value='Saúde'>Saúde</option>
                  <option value='Lazer'>Lazer</option>
                  <option value='Trabalho'>Trabalho</option>
                  <option value='Outros'>Outros</option>
               </select>
               <Controller
                  control={control}
                  name='type'
                  render={({ field }) => {
                     return (
                        <TransactionType
                           onValueChange={field.onChange}
                           value={field.value}
                        >
                           <TransactionTypeButton
                              variant='income'
                              value='income'
                           >
                              <ArrowCircleUp size={24} />
                              Entrada
                           </TransactionTypeButton>
                           <TransactionTypeButton
                              variant='outcome'
                              value='outcome'
                           >
                              <ArrowCircleDown size={24} />
                              Saída
                           </TransactionTypeButton>
                        </TransactionType>
                     );
                  }}
               />

               <button type='submit' disabled={isSubmitting}>
                  Cadastrar
               </button>
            </form>
         </Content>
      </Dialog.Portal>
   );
}
