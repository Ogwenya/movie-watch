import { useState } from "react";
import Link from "next/link";
import {
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Flex,
  Image,
  Title,
  Group,
  ActionIcon,
  SegmentedControl,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function AppHeader() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [filmType, setFilmType] = useState("Movies");

  return (
    <Header p="md">
      {/* height={{ base: 50, md: 70 }} */}
      <Flex
        justify="space-between"
        align="center"
        direction="row"
        wrap="nowrap"
      >
        {/* #################################################*/}
        {/* ######### hamburger MENU AND LOGO/TITLE #########*/}
        {/* #################################################*/}
        <Flex gap="md" align="center" direction="row">
          <Link href="/">
            <Flex gap="md" align="center" direction="row">
              <Image
                width={32}
                src={
                  theme.colorScheme === "dark"
                    ? "/images/logo_light.png"
                    : "/images/logo_dark.png"
                }
                alt="Movie Watch Logo"
              />
              {!isMobile && <Title order={2}>Movie Watch</Title>}
            </Flex>
          </Link>
        </Flex>

        {/* ##############################################*/}
        {/* ######### MENU ITEM AND THEME TOGGLE #########*/}
        {/* ##############################################*/}
        <Flex align="center" direction="row" gap="sm">
          <SegmentedControl
            value={filmType}
            onChange={setFilmType}
            data={[
              { label: "Movies", value: "Movies" },
              { label: "Series", value: "Series" },
            ]}
          />

          {/* ######################################### */}
          {/* ############### THEME TOGGLE ############ */}
          {/* ######################################### */}

          <Group position="center">
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              sx={(theme) => ({
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[4]
                    : theme.colors.blue[6],
              })}
            >
              {colorScheme === "dark" ? (
                <IconSun size="1.2rem" />
              ) : (
                <IconMoonStars size="1.2rem" />
              )}
            </ActionIcon>
          </Group>
        </Flex>
      </Flex>
      {/* lower navbar */}
      <Flex
        gap="md"
        justify="flex-end"
        align="center"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "0.8rem" }}
      >
        {filmType === "Movies" ? (
          <>
            <Link href="/movies/popular">Popular</Link>
            <Link href="/movies/top-rated">Top Rated</Link>
            <Link href="/movies/trending">Trending</Link>
            <Link href="/movies/upcoming">Upcoming</Link>
          </>
        ) : (
          <>
            <Link href="/series/currently-airing">Currently Airing</Link>
            <Link href="/series/trending">Trending</Link>
            <Link href="/series/popular">Popular</Link>
          </>
        )}
      </Flex>
    </Header>
  );
}
