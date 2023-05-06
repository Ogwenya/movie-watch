import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { fetchFilms } from "@/utils/fetchFilms";
import CardList from "@/components/CardList";
import { Center, Loader } from "@mantine/core";

export async function getStaticProps() {
  const result = await fetchFilms("/trending/movie/week");

  return {
    props: {
      result,
    },
    revalidate: 10,
  };
}

const Trending = ({ result }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Center>
        <Loader variant="bars" />
      </Center>
    );
  }

  return (
    <>
      <NextSeo title="Trending Movies" />
      <CardList data={result} />
    </>
  );
};

export default Trending;
