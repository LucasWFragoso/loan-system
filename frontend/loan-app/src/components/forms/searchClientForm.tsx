import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Field } from '../input';
import { useLoan } from '../../contexts/loanContext';
import { TClient, searchClientSchema } from '@/schemas/clientSchema';

export const SearchClientForm = () => {
    const { getClient } = useLoan();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TClient>({
        resolver: zodResolver(searchClientSchema),
        reValidateMode: 'onBlur',
    });

    const onSubmit = async (data: TClient) => {
        try {
            console.log(data);
            await getClient(data.cpf);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-center gap-6'>
            <div>
            <Field
                type="number"
                placeholder="digite o cpf..."
                register={register('cpf', { valueAsNumber: true })}
                id="cpf"
                className='w-1/3 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.cpf?.message}
            />
            </div>
            <button
            type='submit'
            className='w-1/3 h-12 bg-primary-1 px-6 text-font-2 font-flexo font-bold rounded-md'
            >
            Buscar
            </button>
        </div>
        </form>     
    );
};