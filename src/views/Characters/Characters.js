import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [error, setError] = useState('');
  const [race, setRace] = useState('ALL');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters(race);
        setChars(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
        characters</div>
  );
}
