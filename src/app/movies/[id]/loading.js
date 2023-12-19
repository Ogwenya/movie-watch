import { Box, Flex, Group, Skeleton } from "@mantine/core";

export default function Loading() {
  return (
    <Box mt={"xl"}>
      <Skeleton h={10} w={{ base: "100%", sm: 400 }} mb={"md"} />
      <Group gap={"md"}>
        <Skeleton h={8} w={200} />
        <Skeleton h={8} w={200} />
        <Skeleton h={8} w={200} />
      </Group>
      <Flex gap={"md"} mt={"xl"} direction={{ base: "column", sm: "row" }}>
        <Skeleton h={300} w={{ base: "100%", sm: "33%" }} />
        <Skeleton h={300} w={{ base: "100%", sm: "67%" }} />
      </Flex>

      <Flex my={"lg"} gap={"md"}>
        <Skeleton h={20} w={50} radius={"xl"} />
        <Skeleton h={20} w={50} radius={"xl"} />
      </Flex>
      <Skeleton height={8} w={300} radius="xl" />
    </Box>
  );
}
