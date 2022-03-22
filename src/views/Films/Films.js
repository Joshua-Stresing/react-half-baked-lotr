import React, { useEffect, useState } from 'react';
import { fetchFilms } from '../../services/films';


export default function Films() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();

        setFilms(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Films'>
      <h1>Films</h1>
      {error && <p>{error}</p>}
      { films.map((film)=> (
        <p key={film.id}>{film.name}</p>        
      ))}
    </div>
  );
}