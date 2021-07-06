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
  return (
    <>
      <Head>
        <title>{recipeData.card - title}</title>
      </Head>
      {recipeData.title}
      {recipeData.card - title}
      {recipeData.youtube - title}
      {recipeData.youtube - link}
      {recipeData.date}

      <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
    </>
  );
}
