export default function Pagination({fetchState, nextPage, prevPage}) {

  const handlePrev  = () => {
    if (fetchState.page === 1) return;
    prevPage()
  }

  const handleNext  = () => {
    if (fetchState.page === fetchState.totalPages) return;
    nextPage()
  }

  return (
    <div className="flex">
      <div className="pagination">
        <button onClick={handlePrev}>prev</button>
        <p className="page-count">Page {fetchState.page} of {fetchState.totalPages}</p>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  )
}