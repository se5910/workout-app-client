import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { approveClient } from "../../actions/coachActions";
import PropTypes from "prop-types";

const ClientRow = ({ client, approveClient }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Link component={RouterLink} to={`/client/${client.id}`}>
                    {client.name}{" "}
                </Link>
            </TableCell>
            <TableCell align="right">
                {!client.approved ? (
                    <Button
                        variant="contained"
                        onClick={() => {
                            approveClient(client.id);
                        }}
                    >
                        Approve
                    </Button>
                ) : (
                    <p>{client.coach}</p>
                )}
            </TableCell>
        </TableRow>
    );
};

ClientRow.propTypes = {
    approveClient: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
};

export default connect(null, { approveClient })(ClientRow);
