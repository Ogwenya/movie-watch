import { Badge, Text, Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const GenreAndOverview = ({ overview, genres }) => {
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      {/* genres */}
      <Flex mt={20} gap="xs" wrap="wrap">
        {genres.map((genre) => (
          <Badge variant="outline" size="lg" color="gray" key={genre.id}>
            {genre.name}
          </Badge>
        ))}
      </Flex>

      {/* overview */}
      <Box w={isMobile ? "100%" : "70%"} mt={15}>
        <Text>{overview}</Text>
      </Box>
    </>
  );
};

export default GenreAndOverview;
