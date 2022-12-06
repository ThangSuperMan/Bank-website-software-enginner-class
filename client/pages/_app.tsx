import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/main'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

export default function Website({
  Component, pageProps, router
}: AppProps<{ session: Session; }>) {

  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <Layout asPath={router.asPath}>
        <Component {...pageProps} asPath={router.asPath} />
      </Layout>
    </SessionProvider>
  )
}
