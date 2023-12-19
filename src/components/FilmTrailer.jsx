"use client";

import { Image, Grid, Paper, Group, Title, Box } from "@mantine/core";
import { IconVideoOff } from "@/icons/Icons";
import classes from "@/app/FilmDetails.module.css";

const FilmTrailer = ({ poster, trailer, filmTitle }) => {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: "content" }}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          loading="lazy"
          alt={filmTitle}
          h={{ sm: 380 }}
          w={{ base: "80%", sm: "100%" }}
          mx={"auto"}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: "auto" }}>
        {trailer ? (
          <>
            {trailer.site.toLowerCase() === "youtube" && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </>
        ) : (
          <Paper h="100%" className={classes.trailer_not_available}>
            <Group h={"100%"} justify="center" spacing="lg">
              <Box w={{ base: 80, sm: 150 }}>
                <IconVideoOff />
              </Box>
              <Title order={3}>Not Available</Title>
            </Group>
          </Paper>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default FilmTrailer;
