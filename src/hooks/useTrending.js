import { useEffect, useState } from 'react'
import { getTrendings } from '../api/tmdb-api'

const useTrending = (id) => {
  const [trending, setTrending] = useState(null)
  useEffect(() => {
    getTrendings().then((trendingList) => {
      let temp = []
      trendingList.forEach((movie) => {
        temp.push(movie.id)
      })
      setTrending(temp)
    })
  }, [id])
  return [trending, setTrending]
}

export default useTrending;
