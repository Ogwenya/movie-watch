import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SimpleGrid, Flex, Card, Image, Text } from "@mantine/core";

const CardList = ({ data }) => {
  const router = useRouter();

  return (
    <SimpleGrid
      cols={6}
      spacing="lg"
      breakpoints={[
        { maxWidth: "lg", cols: 4, spacing: "md" },
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "22rem", cols: 1, spacing: "sm" },
      ]}
    >
      {data.map((film) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder key={film.id}>
          <Link
            href={
              router.pathname.startsWith("/series")
                ? "/series/[id]"
                : "/movies/[id]"
            }
            as={
              router.pathname.startsWith("/series")
                ? `/series/${film.id}`
                : `/movies/${film.id}`
            }
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              loading="lazy"
              alt={film.title || film.name}
            />
            <Flex
              justify="space-between"
              align="center"
              direction="row"
              wrap="nowrap"
            >
              {/* film.title: for movies && film.name: for series */}
              <Text p="sm" fz={"sm"}>
                {film.title || film.name}
              </Text>
              <Text p="sm" fz={"sm"}>
                {film.vote_average}
              </Text>
            </Flex>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CardList;
