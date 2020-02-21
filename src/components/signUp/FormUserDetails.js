import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
          <TextField
            helperText="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          ></TextField>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
