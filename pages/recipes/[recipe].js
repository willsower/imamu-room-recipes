import { getAllRecipeIds, getRecipeData } from '../../lib/recipes'

export async function getStaticProps({ params }) {
  const recipeData = getRecipeData(params.id)
  return {
    props: {
      recipeData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds()
  return {
    paths,
    fallback: false
  }
}

export default function Recipe({recipeData}) {
  return (
    <>
      {recipeData.title}
      {recipeData.card-title}
      {recipeData.youtube-title}
      {recipeData.youtube-link}
      {recipeData.date}
    </>
  );
}
