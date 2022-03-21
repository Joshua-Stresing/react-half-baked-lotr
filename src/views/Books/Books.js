import { fetchBooks } from './services/books'
import { useEffect, useState } from 'react';

const [films, setBooks] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks();
        console.log(data);
        setFilms(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);