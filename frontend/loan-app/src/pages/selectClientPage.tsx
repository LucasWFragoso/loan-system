import React from 'react';
import Header from '@/components/header';
import { NextPage } from 'next';
import TitleIcon from '@/components/titleIcon';
import { SearchClientForm } from '@/components/forms/searchClientForm';
import { useLoan } from '@/contexts/loanContext';
import Link from 'next/link';
import RefreshError from '@/components/refreshError/refreshError';
import ErrorBoundary from '@/components/refreshError/error';

const SearchClientPage: NextPage = () => {
    const { client, installment } = useLoan();

    return (
        <ErrorBoundary>
            {installment ? (
                <><Header /><div className='container mx-auto p-8 px-48'>
                    <TitleIcon textUp={'Solicitar'} textDown={'Emprestimo'} />
                    <div className='flex flex-col justify-center mt-8 '>
                        <p className='text-heading4 text-primary-1 text-center font-flexo font-light'>Busque o cliente</p>
                        <div className='flex justify-center gap-6 mt-8'>
                            <SearchClientForm />
                        </div>
                        <>
                            {client && (
                                <div className='flex flex-col items-center gap-8 h-full justify-center bg-background-1 mx-40 p-2 mt-8'>
                                    <p className='font-flexo text-font-1 text-heading5'>Cliente encontrado:</p>
                                    <p className='font-flexo text-secondary-1 text-heading6'>{client.cpf}</p>
                                    <p className='font-flexo font-bold text-primary-1 text-heading5'>{client.name}</p>
                                    <Link href='/modalityChoice' className='bg-primary-1 text-font-2 font-flexo font-bold text-heading5 p-4 px-24'>
                                        Solicitar
                                    </Link>
                                </div>
                            )}
                        </>
                    </div>
                </div></>
            ) : (
                <RefreshError />
            )}
        </ErrorBoundary>
        
    )
};

export default SearchClientPage;
