import CardGrid from "@/components/CardGrid";
import { fetchFilms } from "@/utils/fetchFilms";

export async function getData() {
  const data = await fetchFilms("/trending/movie/week");
  return data;
}

const HomePage = async () => {
  const movies = await getData();
  return <CardGrid data={movies} />;
};

export default HomePage;
