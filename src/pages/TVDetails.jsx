import { useParams } from "react-router-dom";
import { useFetchSingle } from "../hooks/useFetchSingle";
import ItemDetails from "../components/ItemDetails";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TVDetails() {
  let { slug } = useParams();
  const { data: shows, isLoading, error } = useFetchSingle(`https://api.themoviedb.org/3/tv/${slug}??language=en-US`);

  return (
    <div className="main-content">
      {error && <div className='not-found'>{error}</div>}
    
      {isLoading && <LoadingSpinner />}  
      
      {shows && <ItemDetails show={shows} mediaType='tv' />}
    </div>
  )
}
