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
  function readIngedients(ingredients) {
    return (
      <>
        {ingredients.map((ingred) => (
          <>
            {ingred.substr(0, 7) == "[TITLE]" ? (
              <div className="mt-2 font-semibold">{ingred.substr(8)}</div>
            ) : (
              <li>{ingred}</li>
            )}
          </>
        ))}
      </>
    );
  }
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

        {/* Video */}
        <iframe
          src={recipeData.youtube_link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="m-auto mt-4 w-9/12 h-48 sm:h-72 md:h-90 lg:h-96"
        ></iframe>

        {/* Ingredients */}
        <div className="border p-2 mt-4">
          <span className="text-2xl">Ingredients</span> <br />
          <div className="text-left p-4">
            {readIngedients(recipeData.Ingredients)}
          </div>
        </div>

        {/* Instructions */}
        <div className="border p-2 mt-4">
          <span className="text-2xl">Instructions</span> <br />
          <div className="text-left p-4">
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
