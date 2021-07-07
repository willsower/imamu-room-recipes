import { getSortedRecipesData } from "../../lib/recipes";

const recipes =
  process.env.NODE_ENV === "production"
    ? require("../../cache/data").recipes
    : getSortedRecipesData();

export default (req, res) => {
  // Search API implemented, looks in the title, youtube title, card title, ingredient list, and any tags associated
  const results = req.query.q
    ? recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(req.query.q.toLowerCase()) ||
        recipe.youtube_title
          .toLowerCase()
          .includes(req.query.q.toLowerCase()) ||
        recipe.card_title.toLowerCase().includes(req.query.q.toLowerCase()) ||
        recipe.tags.filter((tag) => {
          return tag.toLowerCase().includes(req.query.q.toLowerCase());
        }).length > 0
          ? true
          : false ||
            recipe.Ingredients.filter((ingred) => {
              return ingred.toLowerCase().includes(req.query.q.toLowerCase());
            }).length > 0
          ? true
          : false
      )
    : [];

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
