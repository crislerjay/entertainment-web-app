import React, { useState } from 'react'
import { useBookmark } from '../context/BookmarkContext';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ItemDetails({show, mediaType}) {
  const { handleAdd } = useBookmark();

  return (
    <section>
      <div className='show'>
        <div className='show-image'>
          {show.poster_path ? 
            <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} alt={show.title ? show.title : show.name} /> : 
            <LazyLoadImage src={`https://dummyimage.com/486x729/CCC/000&text=no+poster`} alt={show.title ? show.title : show.name} />  
          }
        </div>
        <div className="show-info">
          <div className="show-title">
            <h1 className="heading-l">{show.title ? show.title : show.name}</h1>
            <p className='text-l'>{show.tagline}</p>
          </div>

          <p className="heading-m">Overview</p>
          <p className='text-l'>{show.overview}</p>
          
          <p className="heading-m">Genres</p>
          <ul className="genre-list">
            {show.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>

          <div className="button-list">
            {show.homepage && <p className='button'><Link to={`${show.homepage}/`} target='_blank'>Website</Link></p>}
            {show.imdb_id && <p className='button'><Link to={`https://www.imdb.com/title/${show.imdb_id}/`}  target='_blank'>IMDB</Link></p>}
            <p className='button' onClick={() => handleAdd(show, show.id+mediaType, mediaType, show.id)}><a href="#" onClick={(e) => { e.preventDefault()}}>Add to Bookmark</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
