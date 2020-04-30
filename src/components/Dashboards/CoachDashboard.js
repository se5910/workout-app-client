import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyCoach, logout } from "../../actions/authActions";
import { getClients } from "../../actions/coachActions";

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CoachDashboard = ({
    auth,
    coach: { coach, clients },
    verifyCoach,
    logout,
    getClients,
}) => {
    const classes = useStyles();
    useEffect(() => {
        verifyCoach();
        getClients();
    }, [verifyCoach]);

    if (!coach) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Grid item xs={12}>
            <TableContainer component={Paper}>
                <Table
                    className={classes.table}
                    aria-label="simple table"
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Client</TableCell>
                            <TableCell align="right">Coach</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

CoachDashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    coach: PropTypes.object.isRequired,
    verifyCoach: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    coach: state.coach,
});

export default connect(mapStateToProps, { verifyCoach, logout, getClients })(
    CoachDashboard
);
