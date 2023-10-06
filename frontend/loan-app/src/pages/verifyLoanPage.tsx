import React from 'react';
import Header from '@/components/header';
import { NextPage } from 'next';
import TitleIcon from '@/components/titleIcon';
import { useLoan } from '@/contexts/loanContext';
import Info from '@/components/info'; // Certifique-se de importar o componente Info
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


const VerifyLoanPage: NextPage = () => {
    const { dataLoanRequest, client, installment, postLoan } = useLoan();
    const router = useRouter();


    const handleClick = async () => {
        try {
            await postLoan(dataLoanRequest!);
            toast.success('Empréstimo solicitado com sucesso!');
            router.push('/loanReceipt');
        } catch (error) {
            toast.error('Erro ao solicitar empréstimo');
        }
    };

    return (
        <>
            <Header />
            <div className='container mx-auto p-8 px-4 md:px-24 lg:px-48'>
                <TitleIcon textUp={'Solicitar'} textDown={'Empréstimo'} />
                <div className='flex flex-col justify-center mt-8'>
                    <p className='text-heading4 text-primary-1 text-center font-flexo font-light mb-6'>Verificar Informações do Empréstimo</p>
                    <div className='flex justify-center gap-8'>
                        {dataLoanRequest && (
                            <div className='bg-background-1 p-4 rounded-md w-1/2 flex flex-col gap-8 flex-center'>
                                <h2 className='text-heading6 text-primary-1 text-center font-flexo mb-6'>Informação do Cartão</h2>
                                <Info title='Número cartão' value={dataLoanRequest.card_number} />
                                <Info title='Nome cartão' value={dataLoanRequest.card_name} />
                                <Info title='Data de validade' value={dataLoanRequest.valid_date} />
                                <Info title='CVC' value={dataLoanRequest.card_cvc} />
                            </div>
                        )}

                        {client && (
                            <div className='bg-background-1 p-4 rounded-md w-1/2 flex flex-col gap-8 flex-center'>
                                <h2 className='text-heading6 text-primary-1 text-center font-flexo mb-6'>Informação do Cliente</h2>
                                <Info title='Name' value={client.name} />
                                <Info title='Phone' value={client.phone} />
                                <Info title='CPF' value={client.cpf} />
                                <Info title='Bank Label' value={client.bank_label} />
                                <Info title='Account Type Label' value={client.account_type_label} />
                                <Info title='Account Number' value={client.account_number} />
                            </div>
                        )}

                        {installment && (
                            <div className='bg-background-1 p-4 rounded-md w-1/2 flex flex-col gap-8 flex-center'>
                                <h2 className='text-heading6 text-primary-1 text-center font-flexo mb-6'>Informação Parcelas</h2>
                                <Info title='Installments' value={installment.installments} />
                                <Info title='Installment Interest' value={installment.installment_interest} />
                                <Info title='Installment Value' value={installment.installment_value} />
                                <Info title='Full Value' value={installment.full_value} />
                                <Info title='Comission' value={installment.comission} />
                            </div>
                        )}

                    </div>
                    <div  onClick={handleClick} className='cursor-pointer bg-primary-1 flex items-center gap-8 justify-center p-6 rounded-md w-1/2 m-auto mt-4'>
                        <img src="check.svg" alt="" />
                        <p className='text-heading3 text-font-2 font-flexo font-bold'>Concluir</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyLoanPage;