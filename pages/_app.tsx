import Header from '../components/Header'
import '../styles/globals.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'
import LowerHeader from '../components/LowerHeader'
import Head from 'next/head'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '../services/queryCliente'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
            <title>WesCommerce - Sua Loja Virtual</title>
        </Head>

        <Header/>
        <LowerHeader/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
