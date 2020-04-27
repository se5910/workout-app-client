import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
    const classes = useStyles();
    return (
        <Typography
            variant="body2"
            className={classes.copyright}
            align="center"
        >
            {"Copyright © "}
            <Link color="inherit" href="https://hype4fitness">
                Hype4fitness
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles({
    footer: {
        padding: "2rem",
        marginTop: "auto",
        backgroundColor: "rgba(177,27,27,1)",
    },
    copyright: {
        color: "white",
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </footer>
    );
}
