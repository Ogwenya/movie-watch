import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const metadata = {
  title: "Top-Rated Movies",
  openGraph: {
    title: "Top-Rated Movies",
  },
  twitter: {
    title: "Top-Rated Movies",
  },
};

const TopRatedMovies = async () => {
  const movies = await fetchFilms("/movie/top_rated");
  return <CardGrid data={movies} />;
};

export default TopRatedMovies;
