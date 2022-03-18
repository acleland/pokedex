import React from 'react';
import { useState, useEffect } from 'react';
import PokeCard from '../../components/PokeCard/PokeCard';

import { fetchTypes, fetchFiltered } from '../../services/fetch';

import './Main.css';
import TypeSelect from '../../components/TypeSelect/TypeSelect';
import Search from '../../components/Search/Search';
import PageControls from '../../components/PageControls/PageControls';

export default function Main() {
  const [pokeList, setPokeList] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  // getting the types
  useEffect(() => {
    const getTypes = async () => {
      const alltypes = await fetchTypes();
      setTypes(['all', ...alltypes]);
    };
    getTypes();
  }, []);

  // getting filtered data from the api
  useEffect(() => {
    const getFiltered = async () => {
      const pokemon = await fetchFiltered({ type, query, page, perPage });
      setPokeList(pokemon);
    };
    getFiltered();
  }, [type, query, page, perPage]);

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
      <PageControls {...{ page, setPage }} />
      <div className="poke-container">
        {pokeList.map((item) => (
          <PokeCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
