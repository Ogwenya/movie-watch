import { useMantineTheme, AppShell, Box, rem } from "@mantine/core";
import AppHeader from "./Header";

const Layout = ({ children, ...pageProps }) => {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Box py={30} maw={rem("1440px")} mx={"auto"}>
        {children}
      </Box>
    </AppShell>
  );
};

export default Layout;
