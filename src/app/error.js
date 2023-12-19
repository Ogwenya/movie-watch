"use client";

import { Title, Text, Button, Container, Group, Box, rem } from "@mantine/core";

export default function Error({ error, reset }) {
  return (
    <Box pt={rem("80px")} pb={rem("120px")}>
      <Container>
        <Text
          ta={"center"}
          fw={900}
          fz={{ base: rem("100px"), sm: rem("180px") }}
          lh={1}
          mb={"calc(var(--mantine-spacing-xl) * 1.5)"}
          c={"var(--mantine-color-red-6)"}
        >
          ERROR
        </Text>
        <Title
          ta={"center"}
          fw={900}
          fz={{ base: rem("32px"), sm: rem("38px") }}
          c={"var(--mantine-color-red-4)"}
        >
          {error.message}
        </Title>
        <Text
          size="lg"
          ta="center"
          maw={rem("540px")}
          m={"auto"}
          mt={"xl"}
          mb={"calc(var(--mantine-spacing-xl) * 1.5)"}
          c="var(--mantine-color-dark-2)"
        >
          Our servers could not handle your request. Don&apos;t worry, the
          problem is not on your end. Try refreshing the page. If the problem
          persists, contact support.
        </Text>
        <Group justify="center">
          <Button
            variant="light"
            size="md"
            radius={"md"}
            onClick={() => reset()}
          >
            Refresh the page
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
