import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DisplayResult from "../components/DisplayResult";
import SearchBar from "../components/SearchBar";
import DisplayFoundResult from "../components/DisplayFoundResult";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TVSearch() {
  let { slug } = useParams();
  const location = useLocation();
  const state = location.state;
  const { data: shows, page, nextPage, prevPage, totalPages, totalResults, isLoading, error } = useFetch(state+`${slug}`);
  
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

      {shows && <DisplayFoundResult fetchState={fetchState} />}
      {shows && <DisplayResult fetchState={fetchState} nextPage={nextPage} prevPage={prevPage}  mediaType="tv" />}
    </div>
  )
}
