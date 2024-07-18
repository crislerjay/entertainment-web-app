import React from 'react'
import SearchBar from '../components/SearchBar'
import { useFetch } from '../hooks/useFetch';
import NotFound from './NotFound';
import DisplayResult from '../components/DisplayResult';
import GenreList from '../components/GenreList';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Movie() {
  const { data: shows, page, nextPage, prevPage, totalPages, totalResults, isLoading, error } = useFetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`);

  const fetchState = {
    shows,
    page,
    totalPages,
    totalResults,
  }

  return (
    <div className='main-content'>
      <SearchBar url='https://api.themoviedb.org/3/search/movie?query=' placeHolder='Search by Movies' slug='movie'/>

      {error && <div className='not-found'>{error}</div>}

      {isLoading && <LoadingSpinner />}

      <section>
        <div className="flex">
          <h1 className='heading-l'>Movies</h1>
          <GenreList url='https://api.themoviedb.org/3/genre/movie/list?language=en' />
        </div>

        {shows ? <DisplayResult fetchState={fetchState} nextPage={nextPage} prevPage={prevPage} mediaType="movie" /> : <NotFound />}
      </section>
    </div>
  )
}
