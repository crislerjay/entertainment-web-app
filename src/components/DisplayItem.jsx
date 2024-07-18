import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
import iconTV from '/vectors/icon-category-tv.svg'
import iconMovie from '/vectors/icon-category-movie.svg'

export default function DisplayItem({shows, mediaType}) {
  const navigate = useNavigate()

  return (
    <ul className="show-list">
      {shows && shows.map(show => (
        <li key={show.id} onClick={() => {
          {show.media_type ?  navigate(`/${show.media_type}/${show.id}`) :  navigate(`/${mediaType}/${show.id}`)}
        }}>
          {show.backdrop_path ? <LazyLoadImage className='show-image' src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={show.title ? show.title : show.name} /> : <LazyLoadImage className='show-image' src='https://dummyimage.com/280x174/CCC/000&text=no+image' alt={show.title ? show.title : show.name} />}
          <div className='media'>
            <p>{show.release_date && show.release_date.slice(0, 4)}</p>
            <p>{show.first_air_date && show.first_air_date.slice(0, 4)}</p>
            {mediaType === 'movie' ? <p className='media-name flex'><span><img src={iconMovie} alt="icon movie" /></span>{mediaType}</p> : <p className='media-name flex'><span><img src={iconTV} alt="icon tv" /></span>{mediaType} Series</p>}
          </div>
          <h4 className='heading-xs'>{show.title ? show.title : show.name}</h4>
        </li>
      ))}
    </ul>
  )
}
