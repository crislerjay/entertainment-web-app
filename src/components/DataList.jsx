import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import iconTV from '/vectors/icon-category-tv.svg'
import iconMovie from '/vectors/icon-category-movie.svg'
import LoadingSpinner from './LoadingSpinner';

export default function DataList({title, mediaType,  slug, url}) {
  const { data: shows, isLoading, error } = useFetch(url);

  return (
    <section>
      <div className="flex">
        <h1 className='heading-l'>{title}</h1>
        <p><Link className='text-link' to={slug}>SEE MORE</Link></p>
      </div>

      {error && <div className='not-found'>{error}</div>}
    
      {isLoading && <LoadingSpinner />}

      <ul className="show-list">
        {shows && shows.slice(0, 8).map(show => (
          <li key={show.id}>
            <Link to={`${mediaType}/${show.id}`}>
              {show.backdrop_path ? <LazyLoadImage className='show-image' src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={show.title ? show.title : show.name} /> : <LazyLoadImage className='show-image' src='https://dummyimage.com/280x174/CCC/000&text=no+image' alt={show.title ? show.title : show.name} />}
              <div className='media'>
                <p>{show.release_date && show.release_date.slice(0, 4)}</p>
                <p>{show.first_air_date && show.first_air_date.slice(0, 4)}</p>
                {mediaType && mediaType === 'movie' ? <p className='media-name flex'><span><img src={iconMovie} alt="icon movie" /></span>{mediaType}</p> : <p className='media-name flex'><span><img src={iconTV} alt="icon tv" /></span>{mediaType}</p>}
              </div>
              <h4 className='heading-xs'>{show.title ? show.title : show.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
