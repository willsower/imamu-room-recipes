import { getSortedRecipesData } from '../../lib/recipes'

const recipes = process.env.NODE_ENV === 'production' ? require('../../cache/data').recipes : getSortedRecipesData()

export default (req, res) => {
  const results = req.query.q ?
    recipes.filter(recipe => recipe.title.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}