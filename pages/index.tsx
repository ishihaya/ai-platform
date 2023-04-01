import { Talk } from '@/components/talk'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AIプラットフォーム</title>
        <meta name="description" content="AI Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Talk />
      </main>
    </>
  )
}
