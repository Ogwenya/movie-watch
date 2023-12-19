import Link from "next/link";
import { Box, Container, Flex, Text, rem } from "@mantine/core";

const AppFooter = () => {
  return (
    <Box
      bg={
        "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
      }
      py={"xl"}
    >
      <Container maw={rem("1440px")} mx={"auto"}>
        <Flex
          justify={"space-between"}
          align={"center"}
          direction={{ base: "column", sm: "row" }}
        >
          <Text c="dimmed" size="sm">
            © {new Date().getFullYear()} FroTools. All rights reserved.
          </Text>

          <Text c="dimmed" size="sm">
            Made by{" "}
            <Text
              component={Link}
              href="https://ogwenya.vercel.app/"
              target="_blank"
              className="underline_on_hover"
            >
              OGWENYA
            </Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default AppFooter;
