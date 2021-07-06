import Head from "next/head";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";
import Header from "../../components/Header/header";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
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
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>{recipeData.card_title}</title>
      </Head>

      <Header />
      <Nav />

      {/* Body */}
      <div className="text-center w-10/12 m-auto pb-16">
        {/* Title and Date */}
        <h1 className="mt-4 text-4xl">{recipeData.title}</h1>
        <p>{getDate(recipeData.date)}</p>

        {/* Description */}
        <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />

        {/* Image */}
        <div className="lg:w-9/12 h-auto sm:h-96 md:h-96 m-auto mt-4">
          <img
            src={recipeData.image}
            className="w-full h-full object-cover"
          ></img>
        </div>
        {recipeData.youtube_link}
        {/* Video */}
        <iframe width="560" height="315" src={recipeData.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className = "m-auto mt-4"></iframe>

        {/* Ingredients */}
        <div className="border p-2 mt-4">
          <span className="text-2xl">Ingredients</span> <br />
          <div className = "text-left p-4">
            {recipeData.Ingredients.map((ingred) => (
              <>
                <li>{ingred}</li>
              </>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="border p-2 mt-4">
          <span className="text-2xl">Instructions</span> <br />
          <div className = "text-left p-4">
            {recipeData.Instructions.map((instruct) => (
              <>
                {instruct} <br />
              </>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
