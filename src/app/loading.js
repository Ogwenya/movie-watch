import { SimpleGrid, Skeleton } from "@mantine/core";

export default function Loading() {
  return (
    <SimpleGrid
      cols={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
      mt={"xl"}
    >
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={250} mt="sm" />
        ))}
    </SimpleGrid>
  );
}
