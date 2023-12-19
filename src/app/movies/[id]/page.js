import { Container, Group } from "@mantine/core";
import { fetchDetails } from "@/utils/fetchFilmDetails";
import FilmHeader from "@/components/FilmHeader";
import FilmTrailer from "@/components/FilmTrailer";
import GenreAndOverview from "@/components/GenreAndOverview";
import ProductionCompanies from "@/components/ProductionCompanies";
import OtherStats from "@/components/OtherStats";

export async function generateMetadata({ params, searchParams }, parent) {
  const { film } = await fetchDetails(params.id, "movie");

  return {
    title: film.title || film.name,
    openGraph: {
      title: film.title || film.name,
    },
    twitter: {
      title: film.title || film.name,
    },
  };
}

const MovieDetails = async ({ params }) => {
  const { film, trailer } = await fetchDetails(params.id, "movie");

  return (
    <Container size="xl" my={"xl"}>
      <FilmHeader film={film} film_type={"movie"} />

      {/* poster and trailer */}
      <FilmTrailer
        poster={film.poster_path}
        trailer={trailer}
        filmTitle={film.title}
      />

      {/* genre and overview */}
      <GenreAndOverview overview={film.overview} genres={film.genres} />
      <Group grow align="self-start" my={"xl"}>
        {/* other stats */}
        <OtherStats film={film} />

        {/* production companies */}
        <ProductionCompanies companies={film.production_companies} />
      </Group>
    </Container>
  );
};

export default MovieDetails;
