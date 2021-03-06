import React from "react";
import {
    Card,
    CardContent,
    CardActions,
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

const TemplateCard = ({ template, clientId, planId }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Name: {template && template.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Workout Type: {template && template.workoutType}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Phase: {template && template.phase}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    component={Link}
                    to={`/client/${clientId}/exercise-plan/${planId}/template/${template.id}/update`}
                    size="small"
                    color="primary"
                >
                    Edit Template
                </Button>
                <Button
                    component={Link}
                    to={`/client/${clientId}/exercise-plan/${planId}/template/${template.id}`}
                    size="small"
                    color="primary"
                >
                    View Template
                </Button>
            </CardActions>
        </Card>
    );
};

TemplateCard.propTypes = {
    template: PropTypes.func.isRequired,
    clientId: PropTypes.number.isRequired,
    planId: PropTypes.number.isRequired,
};

export default TemplateCard;
