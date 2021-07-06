import { getAllRecipeIds } from '../../lib/recipes'

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
