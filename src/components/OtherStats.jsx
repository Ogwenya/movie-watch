import Link from "next/link";
import {
  Text,
  Paper,
  Button,
  Box,
  Title,
  Group,
  Avatar,
  rem,
  Card,
} from "@mantine/core";
import { IconCoin, IconReceipt } from "@/icons/Icons";

const OtherStats = ({ film }) => {
  // function to format currency
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Card
      radius="md"
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
      maw={rem("530px")}
      withBorder
    >
      <Box>
        <Box>
          <Title order={6} tt={"uppercase"} c={"dimmed"}>
            Original Title
          </Title>

          <Text fz={"sm"} fw={500}>
            {film.original_title}
          </Text>
        </Box>
        <Box mt={"md"}>
          <Title order={6} tt={"uppercase"} c={"dimmed"}>
            Tagline
          </Title>

          <Text fz={"sm"} fw={500}>
            {film.tagline}
          </Text>
        </Box>

        <Group my="md" grow>
          {/* budget */}
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
              <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                Budget
              </Text>

              <Avatar
                variant="transparent"
                radius="sm"
                size="1.4rem"
                stroke={1.5}
                c="dimmed"
              >
                <IconReceipt />
              </Avatar>
            </Group>

            <Group align="flex-end" gap="xs" mt={25}>
              <Text fw={700} size="xl">
                {formatCurrency(film.budget)}
              </Text>
            </Group>
          </Paper>

          {/* revenue */}
          <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
              <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                Revenue
              </Text>

              <Avatar
                variant="transparent"
                radius="sm"
                size="1.4rem"
                stroke={1.5}
                c="dimmed"
              >
                <IconCoin />
              </Avatar>
            </Group>

            <Group align="flex-end" gap="xs" mt={25}>
              <Text fw={700} size="xl">
                {formatCurrency(film.revenue)}
              </Text>
            </Group>
          </Paper>
        </Group>

        <Button
          w={"100%"}
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={film.homepage}
        >
          View Homepage
        </Button>
      </Box>
    </Card>
  );
};

export default OtherStats;
