import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
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

export default function Home({ result }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Center>
        <Loader variant="bars" />
      </Center>
    );
  }

  return <CardList data={result} />;
}
