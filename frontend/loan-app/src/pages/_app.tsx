import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '@/contexts/loanContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '@/components/refreshError/error';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
      <ContextProvider>
          <Component {...pageProps} />
      </ContextProvider>
      </ErrorBoundary>
      <ToastContainer />
    </>
  )
}
