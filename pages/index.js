import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imamu-Room Recipes</title>
      </Head>
      <Nav/>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </>
  );
}
