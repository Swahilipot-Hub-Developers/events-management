import '@/styles/globals.css'
import '@/styles/scss/theme.scss'
import Layout from '@/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
