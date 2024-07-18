import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import iconTV from '/vectors/icon-category-tv.svg'
import iconMovie from '/vectors/icon-category-movie.svg'
import LoadingSpinner from './LoadingSpinner';

export default function TrendingList({title, mediaType,  slug, url}) {
  const { data: shows, isLoading, error } = useFetch(url);
  return (
    <section>
      <div className="flex">
        <h1 className='heading-l'>{title}</h1>
        <p><Link className='text-link' to={slug}>SEE MORE</Link></p>
      </div>

      {error && <div className='not-found'>{error}</div>}
    
      {isLoading && <LoadingSpinner />}

      <Swiper className='trending-list'
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          650: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
      >
      {shows && shows.map(show => (
        <SwiperSlide key={show.id}>
          <Link className='trending-link' to={`${mediaType}/${show.id}`}>
            <LazyLoadImage className='show-image' src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={show.title ? show.title : show.name} />
            <div className='media'>
              <p>{show.release_date && show.release_date.slice(0, 4)}</p>
              <p>{show.first_air_date && show.first_air_date.slice(0, 4)}</p>
              {mediaType === 'movie' ? <p className='media-name flex'><span><img src={iconMovie} alt="icon movie" /></span>{mediaType}</p> : <p className='media-name flex'><span><img src={iconTV} alt="icon tv" /></span>{mediaType} Series</p>}
            </div>
            <h4 className='heading-xs'>{show.title ? show.title : show.name}</h4>
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
  )
}
