import { TInstallment } from '@/schemas/installmentSchema';
import React from 'react';
import Link from 'next/link';

interface FooterProps {
    installment: TInstallment;
}

const Footer: React.FC<FooterProps> = ({ installment }) => {
    if (!installment) {
        return null;
    }
    return (
        <div className="bg-primary-1 p-4 w-full flex justify-center items-center gap-10">
            <div className='flex gap-6 font-flexo font-bold text-font-2'>
                <p>Números de parcelas: {installment.installments}</p>
                <p>Valor das parcelas: R$ {installment.installment_value.toFixed(2)}</p>
            </div>
            <Link href="/selectClientPage" className="bg-secondary-1 font-flexo font-bold rounded-md text-font-2 p-2">Avançar</Link>
        </div>
    );
};

export default Footer;
