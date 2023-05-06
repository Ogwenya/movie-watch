import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { fetchFilms } from "@/utils/fetchFilms";
import CardList from "@/components/CardList";
import { Center, Loader } from "@mantine/core";

export async function getStaticProps() {
  const result = await fetchFilms("/tv/on_the_air");

  return {
    props: {
      result,
    },
    revalidate: 10,
  };
}

const currentlyAiring = ({ result }) => {
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
      <NextSeo title="Currently Airing TV Series" />
      <CardList data={result} />
    </>
  );
};

export default currentlyAiring;
