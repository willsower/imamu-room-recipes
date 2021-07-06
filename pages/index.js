import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav/nav";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { getSortedRecipeData } from "../lib/recipes";

export async function getStaticProps() {
  const allRecipeData = getSortedRecipeData();
  return {
    props: {
      allRecipeData,
    },
  };
}

export default function Home({ allRecipeData }) {
  function recipeCard(title, id, date, image) {
    // var imgPath = image;
    var imgPath = "/images/2017/aug-2017/crispy-tempura-aug27-2017.png";
    return (
      <>
      <div className = "block w-48 h-48 bg-indigo-300 p-2 mr-2 mb-2">
        {imgPath}
        <Image 
          src = {imgPath}
          height = "50px"
          width = "50px"
        />
      {title}
        <br />
        {id}
        <br />
        {date}
      </div>
      </>
    );
  }

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Imamu-Room Recipes</title>
      </Head>

      {/* <div className = "w-full top-0 fixed"> */}
      <div>
        <Header />
        <Nav />
      </div>

      <section className="flex flex-wrap bg-red-300 h-auto ml-6 mr-6">
        {allRecipeData.map(({ id, date, title, image }) => (
          <div className="" key={id}>
            {recipeCard(title, id, date, image)}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
