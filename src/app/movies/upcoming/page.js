import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const revalidate = 3600;

export const metadata = {
  title: "Upcoming Movies",
  openGraph: {
    title: "Upcoming Movies",
  },
  twitter: {
    title: "Upcoming Movies",
  },
};

const UpcomingMovies = async () => {
  const movies = await fetchFilms("/movie/upcoming");
  return <CardGrid data={movies} />;
};

export default UpcomingMovies;
