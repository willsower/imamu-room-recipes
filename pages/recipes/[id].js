import Head from "next/head";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";
import Header from "../../components/Header/header";
import Nav from "../../components/Nav/nav";
import { getDate } from "../../lib/helper";

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.id);
  return {
    props: {
      recipeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Recipe({ recipeData }) {
  console.log(recipeData)

  return (
    <>
      <Head>
        <title>{recipeData.card_title}</title>
      </Head>

      <Header />
      <Nav />

      {/* Body */}
      <div className = "text-center w-10/12 m-auto">
        {/* Title and Date */}
        <h1 className = "mt-4 text-4xl">{recipeData.title}</h1>
        <p>{getDate(recipeData.date)}</p>

        {/* Image */}
        <div className = "lg:w-9/12 h-auto sm:h-96 md:h-96 m-auto mt-4">
          <img src={recipeData.image} className="w-full h-full object-cover"></img>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </>
  );
}
