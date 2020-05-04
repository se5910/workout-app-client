import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    item: {
        marginBottom: 12,
    },
});

const ClientCard = ({ client }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {client && client.name}
                </Typography>
                <hr></hr>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Height: {client && client.height}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Weight: {client && client.weight}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Goal Weight: {client && client.goalWeight}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Age: {client && client.age}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Body Fat Percentage: {client && client.bodyFatPercentage}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Resting Heart Rate: {client && client.restingHeartRate}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Goal Statement: {client && client.goalStatement}
                </Typography>
                <Typography
                    className={classes.item}
                    variant="h5"
                    component="h2"
                >
                    Health History:{client && client.healthHistory}
                </Typography>
            </CardContent>
        </Card>
    );
};

ClientCard.propTypes = {};

export default ClientCard;
