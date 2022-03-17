import React from 'react';

export default function TypeSelect({ types, type, setType }) {
  return (
    <select className="type-select" value={type} onChange={(e) => setType(e.target.value)}>
      {types.map((t) => (
        <option key={t}>{t}</option>
      ))}
    </select>
  );
}
