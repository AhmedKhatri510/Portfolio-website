import React from "react";
import { AppBar, Toolbar, SvgIcon, Typography, Box } from "@mui/material";
// import { AppBar } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <a
        href="#top"
        style={{
          scrollBehavior: "smooth",
          transition: "all 2s",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Toolbar>
          <ArrowRightIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Ahmed
          </Typography>
        </Toolbar>
      </a>
    </AppBar>
  );
}
