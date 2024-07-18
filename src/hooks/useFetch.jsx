import { useCallback, useEffect, useState } from "react";

export function useFetch(baseUrl, initialPage = 1) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState('')
  const [totalResults, setTotalResults] = useState('')
  const apiKey = '7d4fc53b1d21a2d91122a11f27a2c3d5'

  const url = `${baseUrl}&page=${page}&api_key=${apiKey}`;

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    const controller = new AbortController()

    try {
      const res = await fetch(url, { signal: controller.signal })
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      const json = await res.json()
      setIsLoading(false)
      setData(json.results)
      setTotalPages(json.total_pages)
      setTotalResults(json.total_results)
      setError(null)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('the fetch was aborted');
      } else {
        setIsLoading(false)
        setError('Could not fetch data')
      }
    }
    
    return () => {
      controller.abort()
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return { data, page, setPage, totalPages, totalResults, nextPage, prevPage, isLoading, error }
}