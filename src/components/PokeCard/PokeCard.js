import React from 'react';
import './PokeCard.css';
export default function PokeCard(pokemon) {
  return (
    <div className="poke-card">
      <p className="poke-name">{pokemon.pokemon}</p>
      <img src={`${pokemon.url_image}`} />
      <p>{pokemon.type_1}</p>
    </div>
  );
}
