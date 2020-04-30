import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BlockIcon from "@material-ui/icons/Block";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        height: "500px",
    },
    h2: {
        paddingTop: "5rem",
    },
    h3: {
        marginTop: "2rem",
    },
    icon: {
        marginTop: "2rem",
        height: "30%",
        width: "30%",
        color: "red",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
        minWidth: "12rem",
    },
}));

const NotFound = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h2" className={classes.h2}>
                Not Found
            </Typography>
            <BlockIcon className={classes.icon} />
            <Typography variant="h3" className={classes.h3}>
                Sorry the page your are looking for does not exists
            </Typography>
        </Paper>
    );
};

export default NotFound;
