"use client";

import { Text, Box, Pill } from "@mantine/core";
import classes from "@/app/FilmDetails.module.css";

const GenreAndOverview = ({ overview, genres }) => {
  return (
    <>
      {/* genres */}

      <Pill.Group mt={20}>
        {genres.map((genre) => (
          <Pill
            size="md"
            className={classes.trailer_not_available}
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
