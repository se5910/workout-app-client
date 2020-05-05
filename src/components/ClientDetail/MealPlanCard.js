import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    content: {
        display: "flex",
        flexDirection: "column",
    },
    button: {
        marginTop: "1rem",
    },
});

const MealPlanCard = ({ client, clientId, plans }) => {
    const classes = useStyles();

    const noPlans = (
        <Container style={{ padding: "3rem" }}>
            <Typography>No Exercise plans have been created</Typography>
        </Container>
    );

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                {plans
                    ? plans.map((plan) => (
                          <Typography
                              variant="h5"
                              key={plan.id}
                              component={Link}
                              to={`/client/${clientId}/meal-plan/${plan.planId}`}
                          >
                              {plan.name}
                          </Typography>
                      ))
                    : noPlans}
                <Button
                    component={Link}
                    to={client && `/client/${client.id}/create-meal-plan`}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Create a plan
                </Button>
            </CardContent>
        </Card>
    );
};

MealPlanCard.propTypes = {};

export default MealPlanCard;