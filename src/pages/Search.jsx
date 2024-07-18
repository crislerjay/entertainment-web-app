import { useLocation, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import MultiResult from "../components/MultiResult,";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Search() {
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
      <SearchBar url='https://api.themoviedb.org/3/search/multi?query=' placeHolder='Search by Movies or TV Series' slug='multi'/>

      {error && <div className='not-found'>{error}</div>}

      {isLoading && <LoadingSpinner />}

      {shows && <MultiResult fetchState={fetchState} nextPage={nextPage} prevPage={prevPage}  mediaType="multi"/>}
    </div>
  )
}
