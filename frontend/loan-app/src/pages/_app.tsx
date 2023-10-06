import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '@/contexts/loanContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      <ToastContainer />
    </>
  )
}
