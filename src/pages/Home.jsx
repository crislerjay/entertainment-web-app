import DataList from '../components/DataList'
import SearchBar from '../components/SearchBar'
import TrendingList from '../components/TrendingList'

export default function Home() {
  return (
    <div className='main-content'>
      <SearchBar url='https://api.themoviedb.org/3/search/multi?query=' placeHolder='Search by Movies or TV Series' slug='multi'/>

      <TrendingList mediaType="movie" title="Trending" slug="/movie/category/trending" url="https://api.themoviedb.org/3/trending/movie/day?language=en-US" />
      <DataList mediaType="movie" title="Now Playing" slug="/movie/category/now-playing" url="https://api.themoviedb.org/3/movie/now_playing?language=en-US"/>
      <DataList mediaType="movie" title="Popular" slug="/movie/category/popular" url="https://api.themoviedb.org/3/movie/popular?language=en-US"/>
      <DataList mediaType="movie" title="Top Rated" slug="/movie/category/top-rated" url="https://api.themoviedb.org/3/movie/top_rated?language=en-US"/>
      <DataList mediaType="movie" title="Upcoming" slug="/movie/category/upcoming" url="https://api.themoviedb.org/3/movie/upcoming?language=en-US"/>
    
      <TrendingList mediaType="tv" title="Trending" slug="/tv/category/trending" url="https://api.themoviedb.org/3/trending/tv/day?language=en-US"/>
      <DataList mediaType="tv" title="Airing today" slug="/tv/category/airing-today" url="https://api.themoviedb.org/3/tv/airing_today?language=en-US"/>
      <DataList mediaType="tv" title="On Air" slug="/tv/category/on-air" url="https://api.themoviedb.org/3/tv/on_the_air?language=en-US"/>
      <DataList mediaType="tv" title="Popular" slug="/tv/category/popular" url="https://api.themoviedb.org/3/tv/popular?language=en-US"/>
      <DataList mediaType="tv" title="Top Rated" slug="/tv/category/top-rated" url="https://api.themoviedb.org/3/tv/top_rated?language=en-US"/>
    </div>
  )
}
