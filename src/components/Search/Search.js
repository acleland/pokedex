import React from 'react';

export default function Search({ searchText, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        placeholder="Search Pokemon by Name"
        value={searchText}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
}
