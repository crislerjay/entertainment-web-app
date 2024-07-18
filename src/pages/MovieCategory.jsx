import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import CategorySelected from "../components/CategorySelected";

const componentMap = {
  'trending': <CategorySelected url={`https://api.themoviedb.org/3/trending/movie/day?language=en-US`} mediaType="movie"/>,
  'now-playing': <CategorySelected url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US`} mediaType="movie"/>,
  'popular': <CategorySelected url={`https://api.themoviedb.org/3/movie/popular?language=en-US`} mediaType="movie"/>,
  'top-rated': <CategorySelected url={`https://api.themoviedb.org/3/movie/top_rated?language=en-US`} mediaType="movie"/>,
  'upcoming': <CategorySelected url={`https://api.themoviedb.org/3/movie/upcoming?language=en-US`} mediaType="movie"/>,
};

export default function MovieCategory() {
  let { slug } = useParams();
  const currentPage = slug; 

  return (
    <div className="main-content">
      {componentMap[currentPage] || <NotFound />}
    </div>
  )
}
