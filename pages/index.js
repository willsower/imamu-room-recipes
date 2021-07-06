import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav/nav";
import Header from "../components/header";
import { getSortedRecipeData } from '../lib/recipes';

export async function getStaticProps() {
  const allRecipeData = getSortedRecipeData()
  return {
    props: {
      allRecipeData
    }
  }
}

export default function Home({allRecipeData}) {
  return (
    <>
      <Head>
        <title>Imamu-Room Recipes</title>
      </Head>

      <Header />
      <Nav />

      <section className = "bg-red-300 h-24">

      </section>
    </>
  );
}
