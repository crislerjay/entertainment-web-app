import { useParams } from "react-router-dom";
import { useFetchSingle } from "../hooks/useFetchSingle";
import ItemDetails from "../components/ItemDetails";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

export default function MovieDetails() {
  let { slug } = useParams();
  const { data: shows, isLoading, error } = useFetchSingle(`https://api.themoviedb.org/3/movie/${slug}??language=en-US`);

  return (
    <div className="main-content">
      <SearchBar url='https://api.themoviedb.org/3/search/movie?query=' placeHolder='Search by Movies' slug='movie'/>

      {error && <div className='not-found'>{error}</div>}
    
      {isLoading && <LoadingSpinner />}  
      
      {shows && <ItemDetails show={shows} mediaType='movie' />}
    </div>
  )
}
