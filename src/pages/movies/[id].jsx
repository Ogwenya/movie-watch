import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { fetchFilms } from "@/utils/fetchFilms";
import { fetchDetails } from "@/utils/fetchFilmDetails";
import { Alert, Center, Container, Loader } from "@mantine/core";
import FilmHeader from "@/components/FilmHeader";
import FilmTrailer from "@/components/FilmTrailer";
import GenreAndOverview from "@/components/GenreAndOverview";
import ProductionCompanies from "@/components/ProductionCompanies";
import OtherStats from "@/components/OtherStats";

export async function getStaticProps({ params }) {
  const { film, trailer } = await fetchDetails(params.id, "movie");

  return {
    props: {
      film,
      trailer,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const result = await fetchFilms("/trending/movie/week");

  const paths = result.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

const SinlgeMoie = ({ film, trailer }) => {
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
      <NextSeo title={film.title} />
      <Container size="xl">
        {/* film title and rating */}
        <FilmHeader film={film} film_type={"movie"} />

        {/* poster and trailer */}

        <FilmTrailer
          poster={film.poster_path}
          trailer={trailer}
          filmTitle={film.title}
        />

        {/* genre and overview */}
        <GenreAndOverview overview={film.overview} genres={film.genres} />

        {/* production companies */}
        <ProductionCompanies companies={film.production_companies} />

        {/* other stats */}
        <OtherStats film={film} />
      </Container>
    </>
  );
};

export default SinlgeMoie;
