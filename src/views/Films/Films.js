import React, { useEffect, useState } from 'react';
import { fetchFilms } from './services/films';

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
        {setFilms.map((Film)=> (
            <p key={book.id}>{book.name}</p>        
        ))}
    </div>
)