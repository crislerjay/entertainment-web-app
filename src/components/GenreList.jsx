import { useNavigate } from 'react-router-dom';
import { useFetchGenre } from '../hooks/useFetchGenre'
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function GenreList({url}) {
  const { data: genres, isLoading, error } = useFetchGenre(url);
  const [selectedGenre, setSelectedGenre] = useState("0");
  const navigate = useNavigate();


  const handleChange = (event) => {
    const selectedIndex = event.target.options.selectedIndex;
    const selectedLabel = event.target.options[selectedIndex].text;
    setSelectedGenre(event.target.value);
    navigate(`genre/${event.target.value}`, {state: selectedLabel})
  };

  return (
    <>
    {error && <div className='not-found'>{error}</div>}

    {isLoading && <LoadingSpinner />}

    <select value={selectedGenre} onChange={handleChange}>
      <option value="0">Filter by Genre:</option>
      {genres && genres.map(genre => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
    </>
  )
}
