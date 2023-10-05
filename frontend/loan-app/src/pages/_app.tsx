import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '@/contexts/loanContext';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}
