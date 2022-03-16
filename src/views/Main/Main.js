import React from 'react';
import { useState, useEffect } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import { fetchPokemon, fetchTypes } from '../../services/fetch';

import './Main.css';

export default function Main() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokeData = await fetchPokemon();
      setPokeList(pokeData);
    };
    fetchData();
  }, []);

  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchy = async () => {
      const typeytype = await fetchTypes();
      setTypes(typeytype);
    };
    fetchy();
  }, []);

  return (
    <main>
      <div className="poke-container">
        {pokeList.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
