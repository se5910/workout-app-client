import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BlockIcon from "@material-ui/icons/Block";
import Shayne from "../images/2020-05-04.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        height: "40vw",
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
    img: {
        height: "40%",
        display: "center",
    },
}));

const NotFound = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h2" className={classes.h2}>
                Oops Mate
            </Typography>
            {/* <BlockIcon className={classes.icon} /> */}
            <img src={Shayne} alt="skay" className={classes.img} />
            <Typography variant="h3" className={classes.h3}>
                The page your are looking for is not here.
            </Typography>
        </Paper>
    );
};

export default NotFound;
