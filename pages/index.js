import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav/nav";
import Header from "../components/header";
import { getSortedRecipeData } from '../lib/posts'

export async function getStaticProps() {
  const allRecipeData = getSortedRecipeData()
  return {
    props: {
      allRecipeData
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Imamu-Room Recipes</title>
      </Head>
      <Header />
      <Nav />
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
