import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import DisplayResult from './DisplayResult';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';

export default function CategorySelected({url, mediaType}) {
  const { data: shows, page, nextPage, prevPage, totalPages, totalResults, isLoading, error } = useFetch(url);
  let { slug } = useParams();

  const fetchState = {
    shows,
    page,
    totalPages,
    totalResults,
  }
  
  return (
    <div className='results-container'>
      {mediaType === 'movie' ? <SearchBar url='https://api.themoviedb.org/3/search/movie?query=' placeHolder='Search by Movies' slug='movie'/> : <SearchBar url='https://api.themoviedb.org/3/search/tv?query=' placeHolder='Search by TV Series' slug='tv'/>}
      
      {error && <div className='not-found'>{error}</div>}

      {isLoading && <LoadingSpinner />}

      <section>
        <h1 className='heading-l uppercase'>{slug.replace(/-/g, ' ')}</h1>
        {totalResults ? <DisplayResult fetchState={fetchState} nextPage={nextPage} prevPage={prevPage} mediaType={mediaType} /> : <p className='not-found'>No results found!</p> }
      </section>
    </div>
  )
}
