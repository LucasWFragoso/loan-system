import React from 'react';
import Header from '@/components/header';
import { NextPage } from 'next';
import TitleIcon from '@/components/titleIcon';
import { useLoan } from '@/contexts/loanContext';
import Link from 'next/link';

const ModalityChoicePage: NextPage = () => {
    const { client } = useLoan();
    
    return (
        <>
            <Header/>
            <div className='container mx-auto p-8 px-48'>
                <TitleIcon textUp={'Solicitar'} textDown={'Emprestimo'}/>
                <div className='flex flex-col justify-center mt-8 '>
                    <p className='text-heading4 text-primary-1 text-center font-flexo font-light'>Escolha a modalidade:</p>
                    <div className='flex flex-col items-center justify-center gap-6 mt-8'>
                        <Link href={'/dataCardPage'} className=' bg-primary-1 text-font-2 font-flexo font-bold text-heading5 py-4 px-2 w-1/3 text-center rounded-sm'>Cartão de Crédito</Link>
                        <p className='text-font-1 text-heading5'>Ou</p>
                        <div className='w-1/3'>
                        <p className='bg-primary-1 text-center text-font-2 font-flexo font-bold text-heading5 py-4 px-2 rounded-sm opacity-30'>Crédito Consignado</p>
                        <span className='self-start text-body2 text-font-1 font-flexo'>Em Breve</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalityChoicePage;