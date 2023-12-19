import CardGrid from "@/components/CardGrid";
import { fetchFilms } from "@/utils/fetchFilms";

export const revalidate = 3600;

const HomePage = async () => {
  const movies = await fetchFilms("/trending/movie/week");
  return <CardGrid data={movies} />;
};

export default HomePage;
