import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    spinner: {
        margin: "auto",
    },
});

export const Spinner = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <CircularProgress className={classes.spinner} />
        </Fragment>
    );
};
