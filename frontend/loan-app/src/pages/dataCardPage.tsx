import React from 'react';
import Header from '@/components/header';
import { NextPage } from 'next';
import TitleIcon from '@/components/titleIcon';
import { SearchClientForm } from '@/components/forms/searchClientForm';
import { useLoan } from '@/contexts/loanContext';
import { DataCardForm } from '@/components/forms/dataCardForm';

const DataCardPage: NextPage = () => {

    return (
        <>
            <Header/>
            <div className='container mx-auto p-8 px-48'>
                <TitleIcon textUp={'Solicitar'} textDown={'Emprestimo'}/>
                <div className='flex flex-col justify-center mt-8 '>
                    <p className='text-heading4 text-primary-1 text-center font-flexo font-light'>Insira os dados do cartão</p>
                    <div className='flex justify-center gap-6 mt-8'>
                        <DataCardForm/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataCardPage;