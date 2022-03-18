export async function fetchPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data.map((x) => x.type);
}

export async function fetchByType(type) {
  let fetch_url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
  if (type !== 'all') {
    const params = new URLSearchParams();
    params.set('type', type);
    fetch_url += `?${params.toString()}`;
  }
  const resp = await fetch(fetch_url);
  const data = await resp.json();
  return data.results;
}

export async function fetchFiltered({ type, query, page, perPage }) {
  const params = new URLSearchParams();
  if (query) {
    params.set('pokemon', query);
  }

  if (type !== 'all') {
    params.set('type', type);
  }

  params.set('page', page);
  params.set('perPage', perPage);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
