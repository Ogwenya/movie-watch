import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  rem,
  Flex,
  Image,
  NavLink,
  useMantineColorScheme,
  useComputedColorScheme,
  Title,
  ActionIcon,
  SegmentedControl,
  Group,
  Stack,
} from "@mantine/core";
import { IconMoon, IconSun } from "@/icons/Icons";

const movie_links = [
  { title: "Popular", url: "/movies/popular" },
  { title: "Top Rated", url: "/movies/top-rated" },
  { title: "Trending", url: "/movies/trending" },
  { title: "Upcoming", url: "/movies/upcoming" },
];

const series_links = [
  { title: "Currently Airing", url: "/series/currently-airing" },
  { title: "Trending", url: "/series/trending" },
  { title: "Popular", url: "/series/popular" },
];

const AppHeader = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const pathname = usePathname();

  const [filmType, setFilmType] = useState("Movies");

  return (
    <Stack maw={rem("1440px")} mx={"auto"} gap={0}>
      <Flex align={"center"} justify={"space-between"} w={"100%"}>
        {/* ########################## */}
        {/* ########## LOGO ########## */}
        {/* ########################## */}
        <Link href="/">
          <Flex align="center" gap={10}>
            <Image src="/images/logo.png" w={55} />
            <Title fz={{ base: "sm", md: "xl" }}>Movie Watch</Title>
          </Flex>
        </Link>

        <Group>
          {/* ####################################### */}
          {/* ########## NAV LINKS OPTIONS ########## */}
          {/* ####################################### */}
          <SegmentedControl
            size={{ base: "xs", sm: "sm" }}
            value={filmType}
            onChange={setFilmType}
            data={[
              { label: "Movies", value: "Movies" },
              { label: "Series", value: "Series" },
            ]}
          />

          {/* ################################## */}
          {/* ########## THEME TOGGLE ########## */}
          {/* ################################## */}
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            color={computedColorScheme === "light" ? "blue.6" : "yellow.4"}
          >
            {computedColorScheme === "light" ? (
              <IconMoon stroke={1.5} />
            ) : (
              <IconSun stroke={1.5} />
            )}
          </ActionIcon>
        </Group>
      </Flex>

      {/* ############################### */}
      {/* ########## NAV LINKS ########## */}
      {/* ############################### */}
      <Flex justify={"flex-end"} direction="row" wrap={"wrap"}>
        {filmType === "Movies" ? (
          <>
            {movie_links.map((item) => (
              <NavLink
                component={Link}
                href={item.url}
                key={item.title}
                label={item.title}
                active={pathname === item.url}
                variant="subtle"
                w={"auto"}
              />
            ))}
          </>
        ) : (
          <>
            {series_links.map((item) => (
              <NavLink
                component={Link}
                href={item.url}
                key={item.title}
                label={item.title}
                active={pathname === item.url}
                variant="subtle"
                w={"auto"}
              />
            ))}
          </>
        )}
      </Flex>
    </Stack>
  );
};

export default AppHeader;
