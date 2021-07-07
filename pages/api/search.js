import { getSortedRecipesData } from "../../lib/recipes";

const recipes =
  process.env.NODE_ENV === "production"
    ? require("../../cache/data").recipes
    : getSortedRecipesData();

export default (req, res) => {

    const results = req.query.q
      ? recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(req.query.q.toLowerCase()) ||recipe.youtube_title.toLowerCase().includes(req.query.q.toLowerCase()) ||
          recipe.card_title.toLowerCase().includes(req.query.q.toLowerCase()) || recipe.tags.filter((tag) => tag.toLowerCase().includes(req.query.q.toLowerCase())) || recipe.Ingredients.filter((ingred) => ingred.toLowerCase().includes(req.query.q.toLowerCase())))
      : [];

    // const results = req.query.q
    // ? recipes.filter((recipe) =>
    //     recipe.title.toLowerCase().includes(req.query.q.toLowerCase()) ||recipe.youtube_title.toLowerCase().includes(req.query.q.toLowerCase()) ||
    //     recipe.card_title.toLowerCase().includes(req.query.q.toLowerCase()))
    // : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
