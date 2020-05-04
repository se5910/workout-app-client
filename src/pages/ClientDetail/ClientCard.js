import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

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
    padding: {
        padding: "3rem",
    },
});

const ClientCard = ({ client }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.padding}>
                <Typography variant="h3">{client && client.name}</Typography>
                <hr></hr>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography className={classes.item} variant="h5">
                            Height: {client && client.height} inches
                        </Typography>
                        <Typography className={classes.item} variant="h5">
                            Weight: {client && client.weight} lbs
                        </Typography>
                        <Typography className={classes.item} variant="h5">
                            Goal Weight: {client && client.goalWeight} lbs
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography className={classes.item} variant="h5">
                            Body Fat Percentage:{" "}
                            {client && client.bodyFatPercentage} %
                        </Typography>
                        <Typography className={classes.item} variant="h5">
                            Resting Heart Rate:{" "}
                            {client && client.restingHeartRate} Bpm
                        </Typography>
                        <Typography className={classes.item} variant="h5">
                            Age: {client && client.age} years old
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.item} variant="h5">
                            Goal Statement: {client && client.goalStatement}
                        </Typography>
                        <Typography className={classes.item} variant="h5">
                            Health History:{client && client.healthHistory}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

ClientCard.propTypes = {};

export default ClientCard;
