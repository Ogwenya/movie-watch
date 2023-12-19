import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const revalidate = 3600;

export const metadata = {
  title: "Trending Tv Series",
  openGraph: {
    title: "Trending Tv Series",
  },
  twitter: {
    title: "Trending Tv Series",
  },
};

const TrendingSeries = async () => {
  const tv_series = await fetchFilms("/trending/tv/week");
  return <CardGrid data={tv_series} />;
};

export default TrendingSeries;
