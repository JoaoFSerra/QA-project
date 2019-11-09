import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Questions from "./Questions";

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{ backgroundColor: "pink", height: "100vh" }}
      >
        <Questions />
      </Container>
    </React.Fragment>
  );
}
