import { format } from "date-fns";
import { Title, Text, Group, Flex, Divider, Rating } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { formatRuntime } from "@/utils/formatTime";

const FilmHeader = ({ film, film_type }) => {
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Title>{film_type === "movie" ? film.title : film.name}</Title>

      {isMobile ? (
        <Flex mb="md" direction="column">
          <Text>
            Release Date:{" "}
            {film_type === "movie"
              ? format(new Date(film.release_date), "dd MMMM,yyyy")
              : format(new Date(film.first_air_date), "dd MMMM,yyyy")}
          </Text>

          <Text>
            Runtime:{" "}
            {film_type === "movie"
              ? formatRuntime(film.runtime)
              : `${film.episode_run_time}m`}
          </Text>
          <Flex gap="sm" align="center" direction="row">
            <Rating defaultValue={film.vote_average} count={10} />
          </Flex>
        </Flex>
      ) : (
        <>
          <Group mb="md">
            <Text>
              Release Date:{" "}
              {film_type === "movie"
                ? format(new Date(film.release_date), "dd MMMM,yyyy")
                : format(new Date(film.first_air_date), "dd MMMM,yyyy")}
            </Text>

            <Divider size="sm" orientation="vertical" />

            <Text>
              Runtime:{" "}
              {film_type === "movie"
                ? formatRuntime(film.runtime)
                : `${film.episode_run_time}m`}
            </Text>

            <Divider size="sm" orientation="vertical" />
            <Rating defaultValue={film.vote_average} count={10} />
          </Group>
          {film_type === "tv" && (
            <Group mb="md">
              <Text>Seasons: {film.number_of_seasons}</Text>
              <Divider size="sm" orientation="vertical" />
              <Text>Episodes: {film.number_of_episodes}</Text>
            </Group>
          )}
        </>
      )}
    </>
  );
};

export default FilmHeader;
