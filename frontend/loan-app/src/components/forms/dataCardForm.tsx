import { TDataCard, dataCardSchema } from '@/schemas/dataCardSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Field } from '../input';
import { useLoan } from '../../contexts/loanContext';
import { toast } from 'react-toastify';


export const DataCardForm = () => {
    const { setDataLoanRequest, client, installment } = useLoan();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<TDataCard>({
        resolver: zodResolver(dataCardSchema),
        reValidateMode: 'onBlur',
    });

    const onSubmit = async (data: TDataCard) => {
        try {
            const newData = {
                ...data,
                client_id: client!.id!,
                installment_id: installment!.id!,
            };
            console.log(newData);
            setDataLoanRequest(newData);
        } catch (error) {
            console.error(error);
            toast.error('Erro ao inserir dados do cartão');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center gap-6'>
            <Field
                type="string"
                placeholder="nome impresso no cartão..."
                register={register('card_name', { required: 'Campo obrigatório' })}
                id="card_name"
                className='w-full lg:w-96 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.card_name?.message}
            />
            <Field
                type="string"
                placeholder="número do cartão..."
                register={register('card_number', { required: 'Campo obrigatório' })}
                id="card_number"
                className='w-full lg:w-96 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.card_number?.message}
            />
            <Field
                type="string"
                placeholder="data de validade..."
                register={register('valid_date', { required: 'Campo obrigatório' })}
                id="valid_date"
                className='w-full lg:w-96 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.valid_date?.message}
            />
            <Field
                type="string"
                placeholder="codigo de segurança..."
                register={register('card_cvc', { required: 'Campo obrigatório' })}
                id="card_cvc"
                className='w-full lg:w-96 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo'
                error={errors.card_cvc?.message}
            />
            <button
            type='submit'
            className='w-full h-12 bg-primary-1 px-6 text-font-2 font-flexo font-bold rounded-md'
            >
            Continuar
            </button>
        </div>
        </form>     
    );
};