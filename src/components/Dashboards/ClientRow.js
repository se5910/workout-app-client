import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

export const ClientRow = ({ client }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <Link component={RouterLink} to={`/client/${client.id}`}>
                    {client.name}{" "}
                </Link>
            </TableCell>
            <TableCell align="right">{client.coach}</TableCell>
        </TableRow>
    );
};
