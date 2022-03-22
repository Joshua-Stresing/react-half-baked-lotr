// import React, { useEffect, useState } from 'react';
// import { fetchCharacters } from './services/characters';

// const [chars, setChars] = useState([]);
// const [error, setError] = useState('');

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const data = await fetchCharacters();

//       setChars(data);
//     } catch (e) {
//       setError(e.message);
//     }
//   };
//   fetchData();
// }, []);

import React from 'react';

export default function characters() {
  return (
    <div>characters</div>
  );
}
