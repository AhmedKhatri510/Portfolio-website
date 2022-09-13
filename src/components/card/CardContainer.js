import { Container, Grid } from "@mui/material";

export default function CardContainer(props) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.children}
      </Grid>
    </Container>
  );
}
