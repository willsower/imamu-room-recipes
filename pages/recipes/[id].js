import Head from "next/head";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";

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
      {/* {recipeData.title}
      {recipeData.card_title}
      {recipeData.youtube_title}
      {recipeData.youtube_link}
      {recipeData.date} */}


      {/* <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} /> */}
    </>
  );
}
