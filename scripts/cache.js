const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function recipeData() {
  const recipesDirectory = path.join(process.cwd(), "recipes");
  const fileNames = fs.readdirSync(recipesDirectory);
  const recipes = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(recipesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      title: matterResult.data.title,
      youtube_title: matterResult.data.youtube_title,
      card_title: matterResult.data.card_title,
      Ingredients: matterResult.data.Ingredients,
      tags: matterResult.data.tags
    };
  });
  return `export const recipes = ${JSON.stringify(recipes)}`;
}

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", recipeData(), function (err) {
  if (err) return console.log(err);
  console.log("Recipes cached.");
});
