"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge, Card, Flex, Image, SimpleGrid, Text } from "@mantine/core";

const CardGrid = ({ data }) => {
  const pathname = usePathname();
  return (
    <SimpleGrid
      cols={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
      mt={"xl"}
    >
      {data.map((film) => (
        <Card
          shadow="sm"
          radius={"md"}
          padding="md"
          component={Link}
          href={`${pathname.startsWith("/series") ? "/series" : "/movies"}/${
            film.id
          }`}
          key={film.title}
        >
          <Card.Section>
            <Image
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              loading="lazy"
              alt={film.title || film.name}
            />
          </Card.Section>

          <Flex
            wrap={"nowrap"}
            justify="space-between"
            mt="md"
            mb="xs"
            gap={"xs"}
          >
            <Text fw={500}>{film.title || film.name}</Text>
            <Text>
              <Badge color="yellow">{film.vote_average}</Badge>
            </Text>
          </Flex>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
