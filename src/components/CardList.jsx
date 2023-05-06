import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SimpleGrid, Flex, Card, Image, Text } from "@mantine/core";

const CardList = ({ data }) => {
  const router = useRouter();

  return (
    <SimpleGrid
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: "62rem", cols: 3, spacing: "md" },
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
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
              <Text p="sm">{film.title || film.name}</Text>
              <Text p="sm">{film.vote_average}</Text>
            </Flex>
          </Link>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CardList;
