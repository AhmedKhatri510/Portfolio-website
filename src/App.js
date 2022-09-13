import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Aboutme from "./components/Aboutme";
import CardContainer from "./components/card/CardContainer";
import CustomCard from "./components/card/CustomCard";
import CardDetails from "./constants/cardDetails";

import randomFunction from "./funtions/randomFunction";
import Contact from "./components/Contact";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme} id="top">
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Aboutme />
        <CardContainer>
          {CardDetails.map((cardDetail) => (
            <CustomCard
              imagePath={cardDetail.imagePath}
              liveUrl={cardDetail.liveUrl}
              title={cardDetail.title}
              description={cardDetail.description}
            />
          ))}
        </CardContainer>
      </main>
      {/* Footer */}
      <Contact />
      {/* End footer */}
    </ThemeProvider>
  );
}
