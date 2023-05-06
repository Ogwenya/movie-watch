import { SimpleGrid, Paper, Title, Text, Divider } from "@mantine/core";

const EpisodeOverview = ({ film }) => {
  return (
    <>
      {film.last_episode_to_air && (
        <>
          <Divider
            my="xl"
            labelPosition="center"
            label={<Text>Episodes</Text>}
          />
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            {/* current episode */}
            <Paper shadow="xs" p="xl">
              <Title order={4} mb={15}>
                Latest Episode
              </Title>
              <Text fw={700} mb={10}>
                Episode {film.last_episode_to_air.episode_number}:{" "}
                {film.last_episode_to_air.name}
              </Text>
              <Text>{film.last_episode_to_air.overview}</Text>
              <Divider orientation="vertical" />
            </Paper>
            {/* next episode */}
            {film.next_episode_to_air && (
              <Paper shadow="xs" p="xl">
                <Title order={4} mb={15}>
                  Next Episode
                </Title>
                <Text fw={700} mb={10}>
                  Episode {film.next_episode_to_air.episode_number}:{" "}
                  {film.next_episode_to_air.name}
                </Text>
                <Text>{film.next_episode_to_air.overview}</Text>
              </Paper>
            )}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default EpisodeOverview;
