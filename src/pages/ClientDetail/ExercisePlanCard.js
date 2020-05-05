import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
    content: {
        display: "flex",
        flexDirection: "column",
    },
    button: {
        marginTop: "1rem",
    },
});

const ExercisePlanCard = ({ plans, clientId, client }) => {
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
                              to={`/client/${clientId}/exercise-plan/${plan.planId}`}
                          >
                              {plan.name}
                          </Typography>
                      ))
                    : { noPlans }}
                <Button
                    component={Link}
                    to={client && `/client/${client.id}/create-exercise-plan`}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                >
                    Create a plan
                </Button>
            </CardContent>
        </Card>
    );
};

ExercisePlanCard.propTypes = {};

export default ExercisePlanCard;
