import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  boxStyle: {
    background: "#8c7d71",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  boxWrapping: {
    background: "linear-gradient(#e66465, #9198e5)",
  },
  containerStyle: {
    backgroundColor: "#f4cbd8",
    height: "84vh",
    width: "60vw",
    borderRadius: "15px",
    border: "13px solid linear-gradient(#e66465, #9198e5)",
  },
  letterStyle: {
    textAlign: "center",
    marginTop: "20px",
  },
}));
function LoginForm() {
  const classes = useStyle();
  return (
    <Box className={classes.boxStyle}>
      <CssBaseline />
      <Box className={classes.boxWrapping}>
        <Container className={classes.containerStyle}>
          <Typography variant="h3" className={classes.letterStyle}>
            Log in
          </Typography>
          <Grid></Grid>
        </Container>
      </Box>
    </Box>
  );
}
export default LoginForm;
