import Head from "next/head";
import Image from "next/image";

// Components
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-2">
      <Head>
        <title>Imamu Room</title>
        <link rel="icon" href="/icons/Favicon/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col w-full flex-1 px-5">
        <div class="grid grid-cols-2 gap-4 p-6">
          {/* Image Here */}
          <div className="">
            <Image
              src="/icons/logo.jpg"
              alt="Logo"
              width={1000}
              height={1000}
            />
          </div>

          {/* About Description */}
          <div className="">
            <h3 className="text-4xl mb-6">About</h3>
            <p className="flex flex-col items-center justify-center w-full flex-1 leading-10">
            Hi, I was born and raised in Japan. Currently living in Canada. I was so lazy about cooking until my mid 20s. After I got married I started enjoy cooking! Sorry for my poor English but I hope you enjoy my cooking Thank you：）
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        &copy; 2021 Imamu Room. All rights reserved
      </footer>
    </div>
  );
}
