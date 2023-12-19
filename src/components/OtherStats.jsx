"use client";

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
  Grid,
} from "@mantine/core";
import { IconCoin, IconReceipt } from "@/icons/Icons";
import classes from "@/app/FilmDetails.module.css";

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
      className={classes.stats_container}
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

        <Grid my="md">
          {/* budget */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
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

              <Text fw={700} size="xl" mt={25}>
                {formatCurrency(film.budget)}
              </Text>
            </Paper>
          </Grid.Col>
          {/* revenue */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
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

              <Text fw={700} size="xl" mt={25}>
                {formatCurrency(film.revenue)}
              </Text>
            </Paper>
          </Grid.Col>
        </Grid>

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
