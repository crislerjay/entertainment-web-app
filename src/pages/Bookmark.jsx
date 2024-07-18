import { LazyLoadImage } from "react-lazy-load-image-component";
import { useBookmark } from "../context/BookmarkContext";
import { Link } from "react-router-dom";
import iconTV from '/vectors/icon-category-tv.svg'
import iconMovie from '/vectors/icon-category-movie.svg'

export default function Bookmark() {
  const { items, removeItem } = useBookmark();

  return (
    <div className='main-content'>
      <h1 className='heading-l'>Bookmark</h1>

      <section className="bookmark">
        <ul className="show-list">
          {items && items.map(item => (
            <li key={item.newID}>
              <Link to={item.newURL}>
                {item.backdrop_path ? <LazyLoadImage className='show-image' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title ? item.title : item.name} /> : <LazyLoadImage className='show-image' src='https://dummyimage.com/280x174/CCC/000&text=no+image' alt={item.title ? item.title : item.name} />}
                <div className='media'>
                  <p>{item.release_date && item.release_date.slice(0, 4)}</p>
                  <p>{item.first_air_date && item.first_air_date.slice(0, 4)}</p>
                  {item.mediaType === 'movie' ? <p className='media-name flex'><span><img src={iconMovie} alt="icon movie" /></span>{item.mediaType}</p> : <p className='media-name flex'><span><img src={iconTV} alt="icon tv" /></span>{item.mediaType} Series</p>}
                </div>
                <h4 className="heading-xs">{item.title ? item.title : item.name}</h4>
              </Link> 
              <button onClick={() => removeItem(item.newID)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
