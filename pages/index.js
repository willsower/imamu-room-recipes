import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav/nav";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
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
    <div className = "min-h-screen relative">
      <Head>
        <title>Imamu-Room Recipes</title>
      </Head>

      {/* <div className = "w-full top-0 fixed"> */}
      <div>
        <Header />
        <Nav />
      </div>

      <section className = "bg-red-300 h-24">

      </section>

      <Footer />
    </div>
  );
}
