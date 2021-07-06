import Head from "next/head";
import Link from "next/link";
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
  function getDate(date) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var year = date.substr(0, 4);
    var month = months[parseInt(date.substr(5, 2))];
    var day = parseInt(date.substr(8, 2));

    var newDate = month + " " + day + ", " + year;

    return newDate;
  }
  function recipeCard(title, date, image) {
    return (
      <>
        <div className="block w-72 h-72 bg-white mr-2 mb-2 border rounded-lg relative">
          <img
            src={image}
            className="w-full h-full object-cover rounded-lg"
          ></img>
          {/* <img
            src={image}
            className="w-full h-full object-cover opacity-75 hover:opacity-100 rounded-lg"
          ></img> */}
          <div className="absolute bottom-2 left-2 text-white text-center">
            <span className = "text-sm uppercase">{title}</span>
            <br />
            <span className="text-xs">{getDate(date)}</span>
          </div>
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

      <section className="flex flex-wrap h-auto ml-6 mr-6 mt-4 pb-12 justify-center">
        {allRecipeData.map(({ id, date, card_title, image }) => (
          <div className="" key={id}>
            {recipeCard(title, date, image)}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
