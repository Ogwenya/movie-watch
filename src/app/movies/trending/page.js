import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const metadata = {
  title: "Trending Movies",
  openGraph: {
    title: "Trending Movies",
  },
  twitter: {
    title: "Trending Movies",
  },
};

const TrendingMovies = async () => {
  const movies = await fetchFilms("/trending/movie/week");
  return <CardGrid data={movies} />;
};

export default TrendingMovies;
