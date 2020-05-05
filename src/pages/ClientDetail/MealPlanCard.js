import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

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

const MealPlanCard = ({ clientId, plans }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {plans &&
                    plans.map((plan) => (
                        <Typography
                            variant="h5"
                            component={RouterLink}
                            to={`/client/${clientId}/meal-plan/${plan.planId}`}
                        >
                            {plan.name}
                        </Typography>
                    ))}
            </CardContent>
        </Card>
    );
};

MealPlanCard.propTypes = {};

export default MealPlanCard;
