"use client";

import { Text, Box, Pill } from "@mantine/core";

const GenreAndOverview = ({ overview, genres }) => {
  return (
    <>
      {/* genres */}

      <Pill.Group mt={20}>
        {genres.map((genre) => (
          <Pill
            size="md"
            bg={
              "light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-5))"
            }
            key={genre.id}
          >
            {genre.name}
          </Pill>
        ))}
      </Pill.Group>

      {/* overview */}
      <Box w={{ base: "100%", sm: "70%" }} mt={15}>
        <Text>{overview}</Text>
      </Box>
    </>
  );
};

export default GenreAndOverview;
