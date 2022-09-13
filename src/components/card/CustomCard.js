import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Typography } from "@mui/material";
import randomFunction from "../../funtions/randomFunction";

export default function CustomCard({
  card,
  imagePath,
  liveUrl,
  title,
  description,
}) {
  return (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image=""
          alt="random"
        /> */}
        <div style={{ textAlign: "center" }}>
          {randomFunction(Math.floor(Math.random() * 7) + 1)}
        </div>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="small">
            <a
              href={liveUrl}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Live Url
            </a>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
