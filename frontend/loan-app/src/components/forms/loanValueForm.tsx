import React from 'react';
import { TValueDataRequest, valueDataRequestSchema } from '@/schemas/valueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Field } from '../input';
import { useLoan } from '../../contexts/loanContext';

export const LoanValueForm = () => {
    const { postInstallments } = useLoan();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TValueDataRequest>({
        resolver: zodResolver(valueDataRequestSchema),
        reValidateMode: 'onBlur',
    });

    const onSubmit = async (data: TValueDataRequest) => {
        try {
            await postInstallments(data);
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
                placeholder="R$0,00"
                register={register('value', { valueAsNumber: true })}
                id="value"
                className='w-1/3 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.value?.message}
            />
            </div>
            <button
            type='submit'
            className='w-1/3 h-12 bg-secondary-1 px-6 text-font-2 font-flexo font-bold rounded-md'
            >
            Calcular
            </button>
        </div>
        </form>
    );
};