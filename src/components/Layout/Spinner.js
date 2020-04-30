import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    spinner: {
        margin: "0 auto",
    },
    center: {
        display: "flex",
        height: "25vw",
        alignItems: "center",
    },
});

export const Spinner = () => {
    const classes = useStyles();
    return (
        <Container className={classes.center}>
            <CircularProgress className={classes.spinner} />
        </Container>
    );
};
