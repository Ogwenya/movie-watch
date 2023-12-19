import { SimpleGrid, Paper, Title, Text, Divider } from "@mantine/core";

const Episode_card = ({
  title,
  episode_number,
  episode_name,
  episode_overview,
}) => {
  return (
    <Paper shadow="xs" p="xl" withBorder>
      <Title order={4} mb={15} c={"dimmed"}>
        {title}
      </Title>
      <Text fw={700} mb={10} tt={"uppercase"}>
        Episode {episode_number}: {episode_name}
      </Text>
      <Text>{episode_overview}</Text>
    </Paper>
  );
};

const EpisodeOverview = ({ film }) => {
  return (
    <>
      {film.last_episode_to_air && (
        <>
          <Divider
            my="xl"
            labelPosition="center"
            label={<Text tt={"uppercase"}>Episodes</Text>}
          />
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            {/* current episode */}
            <Episode_card
              title={"Latest Episode"}
              episode_number={film.last_episode_to_air.episode_number}
              episode_name={film.last_episode_to_air.name}
              episode_overview={film.last_episode_to_air.overview}
            />

            {/* next episode */}
            {film.next_episode_to_air && (
              <Episode_card
                title={"Next Episode"}
                episode_number={film.next_episode_to_air.episode_number}
                episode_name={film.next_episode_to_air.name}
                episode_overview={film.next_episode_to_air.overview}
              />
            )}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default EpisodeOverview;
