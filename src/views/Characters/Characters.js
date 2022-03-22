import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import FilterRace from '../../components/Filter/Filter';

// export default function Characters() {
//   const [chars, setChars] = useState([]);
//   const [error, setError] = useState('');
//   const [race, setRace] = useState('ALL');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchCharacters(race);
//         setChars(data);
//         console.log(data);
//       } catch (e) {
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, [race]);

export default function Characters() {
  const [chars, setChars] = useState([]);
  const [race, setRace] = useState('All');
  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setChars(data);
    };
    fetchData();
  }, [race]);
  

  return (
    <div>
      <FilterRace setRace={setRace}/> 
      {chars.map((data)=>(
        <div className='chars' key={data.id}>
          <h1>{data.name}</h1>
          <p>DOB: {data.birth}</p>
          <p>R.I.P: {data.death}</p>
          <p>Race: {data.race}</p>
        </div>
      ))}
    </div>
  );
}

