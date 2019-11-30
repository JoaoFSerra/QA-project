import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Login from "./Login";

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
       
        <Login />
      </Container>
    </React.Fragment>
  );
}
