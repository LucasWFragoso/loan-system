import { useLoan } from '@/contexts/loanContext';
import { TInstallment } from '@/schemas/installmentSchema';
import React from 'react';

interface TableProps {
    data: TInstallment[];
}

import { useState } from 'react';
import Footer from '../footer';

const Table: React.FC<TableProps> = ({ data }) => {
    const { setInstallment, installment } = useLoan();
    const [activeRow, setActiveRow] = useState<number | null>(null);

    const handleRowClick = (index: number) => {
        setActiveRow(index);
        setInstallment(data[index]);
    };

    return (
       <>
        <table className="min-w-full bg-white border border-background-1 mt-8 text-center">
            <thead>
                <tr className="bg-background-1">
                    <th className="border-background-1 p-2 text-font-1 font-flexo font-bold">Parcelas</th>
                    <th className="border-background-1 p-2  text-font-1 font-flexo font-bold">Juros da Parcela</th>
                    <th className="border-background-1 p-2  text-font-1 font-flexo font-bold">Valor da Parcela</th>
                    <th className="border-background-1 p-2  text-font-1 font-flexo font-bold">Valor Total</th>
                    <th className="border-background-1 p-2  text-font-1 font-flexo font-bold ">Comissão Parceiro</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: TInstallment, index: number) => (
                    <tr
                        key={item.id}
                        className={`cursor-pointer ${
                            activeRow === index ? 'bg-background-2' : ''
                        }`}
                        onClick={() => handleRowClick(index)}
                    >
                        <td className="border-background-1 p-2 font-flexo text-font-1">{item.installments}</td>
                        <td className="border-background-1 p-2 font-flexo text-font-1">{item.installment_interest}%</td>
                        <td className="border-background-1 p-2 font-flexo text-font-1">R$ {item.installment_value.toFixed(2)}</td>
                        <td className="border-background-1 p-2 font-flexo text-font-1">R$ {item.full_value.toFixed(2)}</td>
                        <td className="border-background-1 p-2 font-flexo text-font-1">R$ {item.comission.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       </>
    );
};

export default Table;
