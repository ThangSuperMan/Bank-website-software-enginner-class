import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/main'

export default function Website({ Component, pageProps, router }: AppProps) {

  return (
    <Layout asPath={router.asPath}>
      <Component {...pageProps} asPath={router.asPath} />
    </Layout>
  )
}
