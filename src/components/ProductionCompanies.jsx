import { Divider, Title, Paper, Flex, Image } from "@mantine/core";

const ProductionCompanies = ({ companies }) => {
  return (
    <>
      <Divider my="xl" />
      <Title order={5} mb="md">
        Production Companies
      </Title>
      <Flex gap="md" wrap="wrap">
        {companies.map((company) => (
          <Paper key={company.name} shadow="lg" p="md">
            <Image
              width={120}
              src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
              caption={company.name}
              alt={company.name}
              withPlaceholder
            />
          </Paper>
        ))}
      </Flex>
    </>
  );
};

export default ProductionCompanies;
