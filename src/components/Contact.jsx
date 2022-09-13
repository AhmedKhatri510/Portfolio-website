import { Box, Link, Typography } from "@mui/material";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Feel free to reach out on Social sites for work related queries!
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/ahmed-raza-khatri"
          target={"_blank"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SiLinkedin size="30" />
        </a>

        <a
          href="https://www.github.com/Ahmedkhatri510"
          target={"_blank"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SiGithub size="30" />
        </a>
        <a
          href="https://www.twitter.com/Ahmed__Khatri"
          target={"_blank"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SiTwitter size="30" />
        </a>
      </div>
      <Copyright />
    </Box>
  );
}
