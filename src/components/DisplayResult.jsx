import DisplayItem from './DisplayItem';
import Pagination from './Pagination';

export default function DisplayResult({fetchState, nextPage, prevPage, mediaType}) {

  return (
    <div className='results-container'>
      <section>
        {fetchState.totalResults ? <DisplayItem shows={fetchState.shows} mediaType={mediaType} /> : <p className='not-found'>No results found!</p> }

        {fetchState.totalResults ? <Pagination fetchState={fetchState} nextPage={nextPage} prevPage={prevPage} /> : null}
      </section>
    </div>
  )
}
