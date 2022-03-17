import { getByLabelText } from '@testing-library/react';
import React from 'react';

export default function Search({ searchText, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input type="text" name="search" value={searchText} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}
