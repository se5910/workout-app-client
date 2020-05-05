import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const WeekCard = ({ week }) => {
    return (
        <Card>
            <Typography variant="p" style={{ textAlign: "center" }}>
                Week: {week.week}
            </Typography>
            <CardContent>
                <form>
                    <TextField size="small" />
                    <TextField size="small" />
                    <TextField size="small" />
                    <TextField size="small" />
                    <Button type="submit">save</Button>
                </form>
            </CardContent>
        </Card>
    );
};

WeekCard.propTypes = {};

export default WeekCard;
