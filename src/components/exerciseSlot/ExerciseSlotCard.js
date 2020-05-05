import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Button,
    Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const ExerciseSlotCard = ({ template, clientId, planId }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name: {template && template.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Workout Type: {template && template.workoutType}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Phase: {template && template.phase}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    component={Link}
                    to={`/client/${clientId}/exercise-plan/${planId}/template/${template.id}`}
                    size="small"
                    color="primary"
                >
                    Edit Template
                </Button>
            </CardActions>
        </Card>
    );
};

TemplateCard.propTypes = {};

export default ExerciseSlotCard;
