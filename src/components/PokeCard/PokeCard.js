import React from 'react';
import './PokeCard.css';

export default function PokeCard(pokemon) {
  const typeString = pokemon.type_1 + (pokemon.type_2 !== 'NA' ? `, ${pokemon.type_2}` : '');
  return (
    <div className="poke-card">
      <p className="poke-name">{pokemon.pokemon}</p>
      <img src={pokemon.url_image} />
      <table>
        <tr>
          <th>type:</th>
          <td>{typeString}</td>
        </tr>
        <tr>
          <th>attack:</th>
          <td>{pokemon.attack}</td>
        </tr>
        <tr>
          <th>defense:</th>
          <td>{pokemon.defense}</td>
        </tr>
        <tr>
          <th>hp:</th>
          <td>{pokemon.hp}</td>
        </tr>
      </table>
    </div>
  );
}
