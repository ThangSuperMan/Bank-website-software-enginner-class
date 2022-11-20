import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import Layout from '../components/layout/main'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <Layout asPath={router.asPath}>
      <main className={poppins.className}>
        <Component {...pageProps} asPath={router.asPath} />
      </main>
    </Layout>
  )
}
