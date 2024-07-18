import { useParams } from 'react-router-dom';
import MultiResultItem from './MultiResultItem';
import Pagination from './Pagination';

export default function MultiResult({fetchState, nextPage, prevPage, mediaType}) {
  let { slug } = useParams();

  return (
    <div className='results-container'>
      <section>
        <h1 className='heading-l'>{`Found ${fetchState.totalResults} results for ${slug}`}</h1>

        {fetchState.totalResults ? <MultiResultItem shows={fetchState.shows} mediaType={mediaType} /> : <p className='not-found'>No results found!</p> }

        {fetchState.totalResults ? <Pagination fetchState={fetchState} nextPage={nextPage} prevPage={prevPage} /> : null}
      </section>
    </div>
  )
}
