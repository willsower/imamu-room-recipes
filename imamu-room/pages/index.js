import Head from 'next/head';

// Components
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Imamu Room</title>
        <link rel="icon" href="/icons/Favicon/favicon.ico" />
      </Head>

      <Nav/>

      <main className="flex flex-col w-full flex-1 px-20">
        Test
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        &copy; 2021 Imamu Room. All rights reserved
      </footer>
    </div>
  )
}
