import Footer from '@/components/footer';
import { LoanValueForm } from '@/components/forms/loanValueForm';
import Header from '@/components/header';
import TitleIcon from '@/components/titleIcon';
import Table from '@/components/table';
import { useLoan } from '@/contexts/loanContext';
import { useEffect } from 'react';

export default function Home() {
  const { installments, installment, setInstallments } = useLoan();

  return (
    <>
      <Header />
      <div className='container mx-auto p-8 px-48'>
        <TitleIcon textUp={'Simulação'} textDown={'de Taxas'}/>
        <div className='flex flex-col justify-center mt-8 '>
          <p className='text-heading4 text-primary-1 text-center font-bold font-flexo '>Valor Desejado</p>
          <div className='flex justify-center gap-6 mt-8'>
            <LoanValueForm/>
          </div>
        </div>
        {installments && <Table data={installments}/>}
      </div>
      {installment && <Footer installment={installment}/>}
    </>
  );
}
