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
      { films.map((data)=> (
        
        <div key={data.id}> 
          <h1>{data.title}</h1> 
          <p>Box Office Total: {data.box_office_total}</p>
          <p>Academy Award Nominations: {data.academy_award_nominations}</p>
        </div>
      ))}
    </div>
  );
}