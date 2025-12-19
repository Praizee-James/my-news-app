import type { VercelRequest, VercelResponse } from 'vercel'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const { q, page = 1 } = req.query

  if (!q) {
    return res.status(400).json({ error: "Query is required" })
  }

  const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=20&apiKey=${process.env.NEWS_API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: "Failed to fetch search news" })
  }
}
