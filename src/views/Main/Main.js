import React from 'react';
import { useState, useEffect } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';

import { fetchTypes, fetchFiltered } from '../../services/fetch';

import './Main.css';
import TypeSelect from '../../components/TypeSelect/TypeSelect';
import Search from '../../components/Search/Search';

export default function Main() {
  const [pokeList, setPokeList] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  // // getting all the pokemon and setting to the pokeList
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const pokeData = await fetchPokemon();
  //     setPokeList(pokeData);
  //   };
  //   fetchData();
  // }, []);

  // getting the types
  useEffect(() => {
    const getTypes = async () => {
      const alltypes = await fetchTypes();
      setTypes(['all', ...alltypes]);
    };
    getTypes();
  }, []);

  // Filtered by type useEffect
  // useEffect(() => {
  //   const fetchFilteredByType = async () => {
  //     const pokemonByType = await fetchByType(type);
  //     setPokeList(pokemonByType);
  //   };
  //   if (type) {
  //     fetchFilteredByType();
  //   }
  // }, [type]);

  // Filter by type and search
  useEffect(() => {
    const getFiltered = async () => {
      const pokemon = await fetchFiltered(type, query);
      setPokeList(pokemon);
    };
    getFiltered();
  }, [type, query]);

  // Event handlers for searching by name
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setQuery(searchText);
  }

  return (
    <main>
      <Search {...{ searchText, handleChange, handleSubmit }} />
      <TypeSelect types={types} type={type} setType={setType} />
      <div className="poke-container">
        {pokeList.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
