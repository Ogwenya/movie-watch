import { Stack, Text, Paper, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const OtherStats = ({ film }) => {
  const isMobile = useMediaQuery("(max-width: 50em)");

  // function to format currency
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <Paper w={!isMobile && 400} shadow="md" mt="xl" p="xl">
      <Stack>
        <Text fw={700}>
          Original Title:{" "}
          <span style={{ fontWeight: 500 }}>
            {formatCurrency(film.original_title)}
          </span>
        </Text>

        <Text fw={700}>
          Tagline:{" "}
          <span style={{ fontWeight: 500 }}>
            {formatCurrency(film.tagline)}
          </span>
        </Text>
        <Text fw={700}>
          Budget:{" "}
          <span style={{ fontWeight: 500 }}>{formatCurrency(film.budget)}</span>
        </Text>
        <Text fw={700}>
          Revenue:{" "}
          <span style={{ fontWeight: 500 }}>
            {formatCurrency(film.revenue)}
          </span>
        </Text>
        {film.homepage !== "" && (
          <Button
            variant="outline"
            color="blue"
            fullWidth
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={film.homepage}
          >
            View Homepage
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default OtherStats;
