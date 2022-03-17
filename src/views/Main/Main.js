import React from 'react';
import { useState, useEffect } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';
import { fetchByType, fetchPokemon, fetchTypes } from '../../services/fetch';

import './Main.css';
import TypeSelect from '../../components/TypeSelect/TypeSelect';
import Search from '../../components/Search/Search';

export default function Main() {
  const [pokeList, setPokeList] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');
  const [searchText, setSearchText] = useState('');

  // getting all the pokemon and setting to the pokeList
  useEffect(() => {
    const fetchData = async () => {
      const pokeData = await fetchPokemon();
      setPokeList(pokeData);
    };
    fetchData();
  }, []);

  // getting the types
  useEffect(() => {
    const getTypes = async () => {
      const alltypes = await fetchTypes();
      setTypes(['all', ...alltypes]);
    };
    getTypes();
  }, []);

  // Filtered by type useEffect
  useEffect(() => {
    const fetchFilteredByType = async () => {
      const pokemonByType = await fetchByType(type);
      setPokeList(pokemonByType);
    };
    if (type) {
      fetchFilteredByType();
    }
  }, [type]);

  // Event handlers for searching by name
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <main>
      <Search {...{ searchText, handleChange }} />
      <TypeSelect types={types} type={type} setType={setType} />
      <div className="poke-container">
        {pokeList.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
