import { useState } from "react";
import iconSearch from '/vectors/icon-search.svg'
import { useNavigate } from "react-router-dom";

export default function SearchBar({url, placeHolder, slug}) {
  const [inputQuery, setInputQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
     if (inputQuery.trim() === '')  {
    } else {
      setInputQuery('')
      navigate(`/search/${slug}/${inputQuery}`, {state: url})
    }
  }

  return (
    <div className='search-bar'>
      <p className='icon'><img src={iconSearch} alt="search icon" /></p>
      <form onSubmit={handleSearch}>
        <input type="text" value={inputQuery} onChange={(e) => setInputQuery(e.target.value)} placeholder={placeHolder} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}