import './App.css'
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import { BookmarkProvider } from './context/BookmarkContext';
import Home from './pages/Home';
import Movie from './pages/Movie';
import TV from './pages/TV';
import Bookmark from './pages/Bookmark';
import Search from './pages/Search';
import MovieSearch from './pages/MovieSearch';
import MovieDetails from './pages/MovieDetails';
import TVSearch from './pages/TVSearch';
import TVDetails from './pages/TVDetails';
import MovieCategory from './pages/MovieCategory';
import TVCategory from './pages/TVCategory';
import MoviesGenre from './pages/MoviesGenre';
import TVGenre from './pages/TVGenre';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='app'>
      <main>
        <BookmarkProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie" element={<Movie />} />
            <Route path="movie/:slug" element={<MovieDetails />} />
            <Route path="movie/category/:slug" element={<MovieCategory />} />
            <Route path="movie/genre/:slug" element={<MoviesGenre />} />
            <Route path="tv" element={<TV />} />
            <Route path="tv/:slug" element={<TVDetails />} />
            <Route path="tv/category/:slug" element={<TVCategory />} />
            <Route path="tv/genre/:slug" element={<TVGenre />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="search/multi/:slug" element={<Search />} />
            <Route path="search/movie/:slug" element={<MovieSearch />} />
            <Route path="search/tv/:slug" element={<TVSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </BookmarkProvider>
      </main>
    </div>
  )
}

export default App
