import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { createSet } from "../../actions/planActions";
import { connect } from "react-redux";

const WeekCard = ({ week, clientId, exercisePlanId, templateId, slotId }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        createSet(clientId, exercisePlanId, templateId, slotId, {});
    };

    return (
        <Card>
            <Typography variant="p" style={{ textAlign: "center" }}>
                Week: {week.week}
            </Typography>
            <CardContent>
                <form
                    style={{ disply: "table" }}
                    onSubmit={(e) => {
                        onSubmit(e);
                    }}
                >
                    <div style={{ display: "table-row" }}>
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Reps"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Weight"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="RPE"
                            type="number"
                        />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Reps"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Weight"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="RPE"
                            type="number"
                        />
                    </div>
                    <div style={{ display: "table-row" }}>
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Reps"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="Weight"
                            type="number"
                        />
                        <TextField
                            size="small"
                            style={{ display: "table-cell" }}
                            label="RPE"
                            type="number"
                        />
                    </div>

                    <Button type="submit">save</Button>
                </form>
            </CardContent>
        </Card>
    );
};

WeekCard.propTypes = {
    week: PropTypes.object.isRequired,
};

export default connect(null, { createSet })(WeekCard);
