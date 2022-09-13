import { Button, Container, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export default function Aboutme() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            I am Ahmed
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Currently a Software Developer. Have work experience as DB Developer
            and ReactJs Developer. Can checkout some projects i've built
            personally here.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">
              <a
                href="https://www.github.com/Ahmedkhatri510"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github
              </a>
            </Button>
            <Button variant="outlined">
              <a
                href="https://www.linkedin.com/in/ahmed-raza-khatri"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Linkedin
              </a>
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
