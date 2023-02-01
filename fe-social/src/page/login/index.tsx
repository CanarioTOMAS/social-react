import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Typography variant="subtitle1" component="div">
        Selected: Estamos En Login
      </Typography>
    </Container>
  );
};
