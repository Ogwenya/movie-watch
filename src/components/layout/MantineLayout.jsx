"use client";

import { AppShell, Box, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const MantineLayout = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell padding="md">
      {/* app header */}
      <AppShell.Header>
        <AppHeader toggle={toggle} opened={opened} />
      </AppShell.Header>

      {/* main content */}
      <AppShell.Main>
        <Box
          maw={rem("1440px")}
          mx={"auto"}
          px={{ base: rem("16px"), sm: rem("24px"), md: rem("32px") }}
        >
          {children}
        </Box>
      </AppShell.Main>

      {/* footer */}
      <AppShell.Footer withBorder={false} pos={"relative"}>
        <AppFooter />
      </AppShell.Footer>
    </AppShell>
  );
};

export default MantineLayout;
