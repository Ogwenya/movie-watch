import { Image, Grid, Paper, Group, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconVideoOff } from "@tabler/icons-react";

const FilmTrailer = ({ poster, trailer, filmTitle }) => {
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <Grid columns={isMobile ? 1 : 2}>
      <Grid.Col span={!isMobile && "content"} h="100%">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          loading="lazy"
          alt={filmTitle}
          height={!isMobile && 380}
        />
      </Grid.Col>

      {/* trailer */}
      <Grid.Col span={!isMobile && "auto"}>
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
          <Paper h="100%">
            <Group h="100%" position="center" spacing="lg">
              <IconVideoOff size="4rem" />
              <Title order={3}>Not Available</Title>
            </Group>
          </Paper>
        )}
      </Grid.Col>
    </Grid>
  );
};

export default FilmTrailer;
