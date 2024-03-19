import { Box, Button, Container, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" component="h1" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          HealthCare
        </Typography>

        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography>Consultation</Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NFOs</Typography>
        </Stack>

        <Button>Login</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
