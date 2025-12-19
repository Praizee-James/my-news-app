export default async function handler(req, res) {
  const { q, page = 1 } = req.query

  const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=20&apiKey=${process.env.NEWS_API_KEY}`

  const response = await fetch(url)
  const data = await response.json()

  res.status(200).json(data)
}
