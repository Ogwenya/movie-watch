import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const revalidate = 3600;

export const metadata = {
  title: "Currently Airing Tv Series",
  openGraph: {
    title: "Currently Airing Tv Series",
  },
  twitter: {
    title: "Currently Airing Tv Series",
  },
};

const CurrentlyAiringSeries = async () => {
  const tv_series = await fetchFilms("/tv/on_the_air");
  return <CardGrid data={tv_series} />;
};

export default CurrentlyAiringSeries;
