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
            <input className='w-1/3 h-12 bg-background-1 rounded-md text-heading6 text-font-1 text-center font-flexo' type="text" placeholder='R$0,00' /> 
            <button type='submit' className='bg-secondary-1 px-6 text-font-2 font-flexo font-bold rounded-md'>Calcular</button>
          </div>
        </div>
      </div>
    </>
  )
}
