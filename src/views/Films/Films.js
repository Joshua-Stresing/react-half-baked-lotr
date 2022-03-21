import { fetchFilms } from './services/films'
import { useEffect, useState } from 'react';

const [films, setFilms] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();
        console.log(data);
        setFilms(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);