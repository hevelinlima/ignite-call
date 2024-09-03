import Head from 'next/head'
import { Roboto } from 'next/font/google'
import { getCssText, Heading } from '@ignite-ui/react'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <main className={roboto.className}>
        <Heading>Hello, world!</Heading>
      </main>
    </>
  )
}
