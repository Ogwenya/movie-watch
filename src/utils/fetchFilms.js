export const fetchFilms = async (category) => {
  const API_URL = process.env.URL;
  const API_KEY = process.env.API_KEY;
  let result = [];

  for (let page = 1; page < 10; page++) {
    const url = `${API_URL}${category}?api_key=${API_KEY}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    result.push(data.results);
    result = result.flat();
  }
  return result;
};
