import Link from 'next/link';
import React from 'react';

const RefreshError = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-heading4 font-flexo">
            <h1 className="text-3xl mb-8">Erro ao atualizar página: Por favor reiniciar processo</h1>
            <Link href="/" className="text-lg py-2 px-4 bg-primary-1 text-font-2 rounded-lg no-underline">Voltar</Link>
        </div>
    );
};

export default RefreshError;
