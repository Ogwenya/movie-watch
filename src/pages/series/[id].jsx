import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { fetchFilms } from "@/utils/fetchFilms";
import { fetchDetails } from "@/utils/fetchFilmDetails";
import {
  Alert,
  Center,
  Container,
  Loader,
  Box,
  Title,
  Text,
} from "@mantine/core";
import FilmHeader from "@/components/FilmHeader";
import FilmTrailer from "@/components/FilmTrailer";
import GenreAndOverview from "@/components/GenreAndOverview";
import ProductionCompanies from "@/components/ProductionCompanies";
import EpisodeOverview from "@/components/EpisodeOverview";

export async function getStaticProps({ params }) {
  const { film, trailer } = await fetchDetails(params.id, "tv");

  return {
    props: {
      film,
      trailer,
    },

    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const result = await fetchFilms("/tv/on_the_air");

  const paths = result.map((film) => ({
    params: { id: film.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

const SeriesDetail = ({ film, trailer }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Center>
        <Loader variant="bars" />
      </Center>
    );
  }

  if (film.success === false) {
    return (
      <Center>
        <Alert title="Not Found!" color="red" radius="md" variant="filled">
          {film.status_message}
        </Alert>
      </Center>
    );
  }
  return (
    <>
      <NextSeo title={film.name} />
      <Container size="xl">
        {/* film title and rating */}
        <FilmHeader film={film} film_type={"tv"} />

        {/* poster and trailer */}
        <FilmTrailer
          poster={film.poster_path}
          trailer={trailer}
          filmTitle={film.name}
        />

        {/* genre and overview */}
        <GenreAndOverview overview={film.overview} genres={film.genres} />

        {/* next & previous episode */}
        <EpisodeOverview film={film} />

        {/* production companies */}
        <ProductionCompanies companies={film.networks} />
      </Container>
    </>
  );
};

export default SeriesDetail;
