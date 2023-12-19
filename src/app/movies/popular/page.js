import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const metadata = {
  title: "Popular Movies",
  openGraph: {
    title: "Popular Movies",
  },
  twitter: {
    title: "Popular Movies",
  },
};

const PopularMovies = async () => {
  const movies = await fetchFilms("/movie/popular");
  return <CardGrid data={movies} />;
};

export default PopularMovies;
