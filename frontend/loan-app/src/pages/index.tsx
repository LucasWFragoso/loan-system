import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import SimulacaotaxasIcon from '@/components/simulacaoTaxasTitle';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Header />
      <div className='container mx-auto p-8 px-48'>
        <SimulacaotaxasIcon />
      </div>
    </>
  )
}
