import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import DisplayResult from "../components/DisplayResult";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TVGenre() {
  let { slug } = useParams();
  const location = useLocation();
  const state = location.state;
  const { data: shows, page, nextPage, prevPage, totalPages, totalResults, isLoading, error } = useFetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${slug}`);

  const fetchState = {
    shows,
    page,
    totalPages,
    totalResults,
  }

  return (
   <div className="main-content">
      <SearchBar url='https://api.themoviedb.org/3/search/tv?query=' placeHolder='Search by TV Series' slug='tv'/>
      {error && <div className='not-found'>{error}</div>}

      {isLoading && <LoadingSpinner />}

      <section>
        <h1 className='heading-l'>{state}</h1>
        {shows && <DisplayResult fetchState={fetchState} nextPage={nextPage} prevPage={prevPage} mediaType="tv" />}
      </section>
   </div>
  )
}
