import { LoanValueForm } from '@/components/forms/loanValueForm';
import Header from '@/components/header';
import SimulacaotaxasIcon from '@/components/simulacaoTaxasTitle';



export default function Home() {
  return (
    <>
      <Header />
      <div className='container mx-auto p-8 px-48'>
        <SimulacaotaxasIcon />
        <div className='flex flex-col justify-center mt-8 '>
          <p className='text-heading4 text-primary-1 text-center font-bold font-flexo '>Valor Desejado</p>
          <div className='flex justify-center gap-6 mt-8'>
            <LoanValueForm/>
          </div>
        </div>
      </div>
    </>
  )
}
