const BASE_URL = 'https://flems.github.io/test/api';

export const $query = async (url) => {
  const res = await fetch(BASE_URL + url);
  const data = await res.json();

  return data;
}
