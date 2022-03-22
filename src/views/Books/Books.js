import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';


export default function Books() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBooks();
          
        setBooks(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Books'>
      <h1>Books</h1>
      {error && <p>{error}</p>}
      { books.map((book)=> (
        <p key={book.id}>{book.title}</p>        
      ))}
    </div>
  );
}
