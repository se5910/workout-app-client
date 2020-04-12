import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import NavBar from './NavBar'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Hype4fitness
      </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    }
}));

const Layout = ({ auth, history, children }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const loginOrProfile = () => {

        return auth.validToken && auth.user ?
            <MenuList>
                <MenuItem component={Link} to="/">
                    Home
            </MenuItem>
                <MenuItem component={Link} to="/login">
                    Login
            </MenuItem>
                <MenuItem component={Link} to="/dashboard">
                    Dashboard
            </MenuItem>
            </MenuList>
            :
            < MenuList >
                <MenuItem component={Link} to="/meal">
                    Meal Plan
            </MenuItem>
                <MenuItem component={Link} to="/exercise">
                    Exercise Plan
            </MenuItem>
                <MenuItem component={Link} to="/dashboard">
                    Dashboard
            </MenuItem>
                <MenuItem component={Link} to="/plans">
                    Purchased Plans
            </MenuItem>
                <MenuItem component={Link} to="/login">
                    Log Out
            </MenuItem>
            </MenuList >
    }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar handleDrawerOpen={handleDrawerOpen} />
            <Drawer
                // variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                {loginOrProfile(auth)}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {children}
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

Layout.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(withRouter(Layout))
