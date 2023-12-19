import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const revalidate = 3600;

export const metadata = {
  title: "Popular Tv Series",
  openGraph: {
    title: "Popular Tv Series",
  },
  twitter: {
    title: "Popular Tv Series",
  },
};

const PopularSeries = async () => {
  const tv_series = await fetchFilms("/tv/popular");
  return <CardGrid data={tv_series} />;
};

export default PopularSeries;
