import { TInstallment } from '@/schemas/installmentSchema';
import React from 'react';

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
                <p>Installment Interest: {installment.installments}</p>
                <p>Installment Value: R$ {installment.installment_value.toFixed(2)}</p>
            </div>
            <a href="/" className="bg-secondary-1 font-flexo font-bold rounded-md text-font-2 p-2">Avançar</a>
        </div>
    );
};

export default Footer;
