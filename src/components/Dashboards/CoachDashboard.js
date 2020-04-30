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
import { ClientRow } from "./ClientRow";

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

function createData(name, coach) {
    return { name, coach };
}

const CoachDashboard = ({
    auth,
    coach: { coach, clients, loading },
    verifyCoach,
    logout,
    getClients,
}) => {
    const classes = useStyles();

    const rows = [];

    useEffect(() => {
        verifyCoach();
        if (!clients) {
            getClients();
        }
        if (!loading && clients) {
            for (const key in clients) {
                rows.push(createData(key.name, key.coach));
            }
        }
    }, [verifyCoach, getClients]);

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
                        {clients &&
                            clients.map((row) => (
                                <ClientRow key={row.id} client={row} />
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
