import { Box, Container } from "@mantine/core";
import { fetchDetails } from "@/utils/fetchFilmDetails";
import FilmHeader from "@/components/FilmHeader";
import FilmTrailer from "@/components/FilmTrailer";
import GenreAndOverview from "@/components/GenreAndOverview";
import ProductionCompanies from "@/components/ProductionCompanies";
import EpisodeOverview from "@/components/EpisodeOverview";

export const revalidate = 3600;

export async function generateMetadata({ params, searchParams }, parent) {
  const { film } = await fetchDetails(params.id, "tv");

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

const SeriesDetails = async ({ params }) => {
  const { film, trailer } = await fetchDetails(params.id, "tv");
  return (
    <Container size="xl" my={"xl"}>
      <FilmHeader film={film} film_type={"tv"} />

      {/* poster and trailer */}
      <FilmTrailer
        poster={film.poster_path}
        trailer={trailer}
        filmTitle={film.title}
      />

      {/* genre and overview */}
      <GenreAndOverview overview={film.overview} genres={film.genres} />

      {/* next & previous episode */}
      <EpisodeOverview film={film} />

      {/* production companies */}
      <Box my={"xl"}>
        <ProductionCompanies companies={film.production_companies} />
      </Box>
    </Container>
  );
};

export default SeriesDetails;
