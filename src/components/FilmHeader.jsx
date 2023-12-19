import { format } from "date-fns";
import { Title, Text, Group, Flex, Divider, Rating, Box } from "@mantine/core";
import { formatRuntime } from "@/utils/formatTime";

const FilmHeader = ({ film, film_type }) => {
  let runtime;

  if (film_type === "movie") {
    runtime = formatRuntime(film.runtime);
  } else {
    if (Array.isArray(film.episode_run_time)) {
      if (film.episode_run_time.length > 0) {
        runtime = formatRuntime(film.episode_run_time[0]);
      } else {
        runtime = "Not Provided";
      }
    } else {
      runtime = formatRuntime(film.episode_run_time);
    }
  }

  const release_date =
    film_type === "movie"
      ? film.release_date !== ""
        ? format(new Date(film.release_date), "dd MMMM,yyyy")
        : ""
      : film.first_air_date !== ""
      ? format(new Date(film.first_air_date), "dd MMMM,yyyy")
      : "";
  return (
    <Box>
      <Title>{film_type === "movie" ? film.title : film.name}</Title>

      {/* large screen */}
      <Group mb="md" visibleFrom="xs">
        <Text>Release Date: {release_date}</Text>

        <Divider size="sm" orientation="vertical" />

        <Text>Runtime: {runtime}</Text>

        <Divider size="sm" orientation="vertical" />
        <Rating defaultValue={film.vote_average} count={10} />
      </Group>

      {/* small screen */}
      <Flex mb="md" direction="column" hiddenFrom="xs">
        <Text>Release Date: {release_date}</Text>
        <Text>Runtime: {runtime}</Text>
        <Flex gap="sm" align="center" direction="row">
          <Rating defaultValue={film.vote_average} count={10} />
        </Flex>
      </Flex>

      {film_type === "tv" && (
        <Group mb="md">
          <Text>Seasons: {film.number_of_seasons}</Text>
          <Divider size="sm" orientation="vertical" />
          <Text>Episodes: {film.number_of_episodes}</Text>
        </Group>
      )}
    </Box>
  );
};

export default FilmHeader;
