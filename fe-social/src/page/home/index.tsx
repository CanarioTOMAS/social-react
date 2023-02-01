import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { NavBar } from "../../common/NavBar";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      
      <Typography variant="subtitle1" component="div">
        Selected: Estamos en Home
      </Typography>
    </Container>
  );
};
