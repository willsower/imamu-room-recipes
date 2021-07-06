import { getAllRecipeIds, getRecipeData } from '../../lib/posts'

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

export default function Recipe() {
  return <></>;
}
