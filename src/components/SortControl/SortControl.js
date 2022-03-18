import React from 'react';
import './SortControl.css';

export default function SortControl({ options, sortBy, setSortBy, sortOrder, setSortOrder }) {
  return (
    <div>
      <label htmlFor="sortBy">Sort by: </label>
      <select
        className="sort-select"
        name="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <div value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <input type="radio" id="asc" name="sortOrder" value="asc" defaultChecked />
        <label htmlFor="asc">asc</label>
        <input type="radio" id="desc" name="sortOrder" value="desc" />
        <label htmlFor="asc">desc</label>
      </div>
    </div>
  );
}
