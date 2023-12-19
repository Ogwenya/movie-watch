import { fetchFilms } from "@/utils/fetchFilms";
import CardGrid from "@/components/CardGrid";

export const metadata = {
  title: "Trending Tv Series",
  openGraph: {
    title: "Trending Tv Series",
  },
  twitter: {
    Trending,
  },
};

const TrendingSeries = async () => {
  const tv_series = await fetchFilms("/trending/tv/week");
  return <CardGrid data={tv_series} />;
};

export default TrendingSeries;
