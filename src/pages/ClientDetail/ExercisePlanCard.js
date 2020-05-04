import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: "20px",
    },
    title: {
        fontSize: 14,
    },
    item: {
        marginBottom: 12,
    },
});

const ExercisePlanCard = ({ plans, clientId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {plans &&
                    plans.map((plan) => (
                        <Typography
                            variant="h5"
                            component={RouterLink}
                            to={`/client/${clientId}/exercise-plan/${plan.planId}`}
                        >
                            {plan.name}
                        </Typography>
                    ))}
            </CardContent>
        </Card>
    );
};

ExercisePlanCard.propTypes = {};

export default ExercisePlanCard;
