import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import CategorySelected from "../components/CategorySelected";

const componentMap = {
  'trending': <CategorySelected url={`https://api.themoviedb.org/3/trending/tv/day?language=en-US`} mediaType="tv"/>,
  'airing-today': <CategorySelected url={`https://api.themoviedb.org/3/tv/airing_today?language=en-US`} mediaType="tv"/>,
  'on-air': <CategorySelected url={`https://api.themoviedb.org/3/tv/on_the_air?language=en-US`} mediaType="tv"/>,
  'popular': <CategorySelected url={`https://api.themoviedb.org/3/tv/popular?language=en-US`} mediaType="tv"/>,
  'top-rated': <CategorySelected url={`https://api.themoviedb.org/3/tv/top_rated?language=en-US`} mediaType="tv"/>,
};

export default function TVCategory() {
  let { slug } = useParams();
  const currentPage = slug; 

  return (
    <div className="main-content">
      {componentMap[currentPage] || <NotFound />}
    </div>
  )
}
