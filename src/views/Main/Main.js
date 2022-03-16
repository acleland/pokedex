import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPokemon } from '../../services/fetch';

export default function Main() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokeData = await fetchPokemon();
      setPokeList(pokeData);
    };
    fetchData();
  }, []);

  return (
    <main>
      Main
      <ul>
        {pokeList.map((item) => (
          <li key={item.id}>{item.pokemon}</li>
        ))}
      </ul>
    </main>
  );
}
