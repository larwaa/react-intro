import { Container, Link, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Stack direction="column" alignItems="center" paddingTop={4}>
        <Stack direction="column" alignItems="center">
          <Typography variant="h4" component="h1">
            Introduction to React for Rubberdøk, 2023
          </Typography>
          <Typography variant="caption" component="span">
            <Link underline="hover" href="https://github.com/larwaa">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                @larwaa
              </Stack>
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
