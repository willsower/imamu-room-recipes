import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from 'remark'
import html from 'remark-html'

const recipeDirectory = path.join(process.cwd(), "recipes");

export function getSortedRecipeData() {
  // Get file names under /recipe
  const fileNames = fs.readdirSync(recipeDirectory);
  const allRecipeData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(recipeDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the recipe metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort recipe by date
  return allRecipeData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Returns array of objects
export function getAllRecipeIds() {
  const fileNames = fs.readdirSync(recipeDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Grabs recipe information
export async function getRecipeData(id) {
  const fullPath = path.join(recipeDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the recipe metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}