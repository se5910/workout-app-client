import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const WeekCard = ({ week }) => {
    const [formData, setFormData] = useState({
        setNumber: "",
    });

    return (
        <Card>
            <Typography variant="p" style={{ textAlign: "center" }}>
                Week: {week.week}
            </Typography>
            <CardContent>
                <form style={{ disply: "table" }}>
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

WeekCard.propTypes = {};

export default WeekCard;
