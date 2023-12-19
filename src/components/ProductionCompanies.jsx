"use client";

import { Image, Card, Text, SimpleGrid, UnstyledButton } from "@mantine/core";

const ProductionCompanies = ({ companies }) => {
  return (
    <Card
      withBorder
      radius="md"
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
      w={{ base: "100%", sm: "max-content" }}
      maw={{ base: "100%", sm: "fit-content" }}
    >
      <Text fw={700}>Production Companies</Text>

      <SimpleGrid cols={{ base: 2, sm: 3 }} mt="md">
        {companies.map((company) => (
          <UnstyledButton
            key={company.name}
            w={"8rem"}
            h={"8rem"}
            className="company-button"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
              fallbackSrc="/images/image_placeholder.jpg"
              maw={"90%"}
              mah={"90%"}
              fit="contain"
            />
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default ProductionCompanies;
