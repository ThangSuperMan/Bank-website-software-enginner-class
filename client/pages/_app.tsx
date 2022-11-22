import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/main'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout asPath={router.asPath}>
      <div>
        <Component {...pageProps} asPath={router.asPath} />
      </div>
    </Layout>
  )
}
