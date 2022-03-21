import { fetchCharacters } from './services/characters'
import { useEffect, useState } from 'react';

const [chars, setChars] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchCharacters();
      console.log(data);
      setChars(data);
    } catch (e) {
      setError(e.message);
    }
  };
  fetchData();
}, []);