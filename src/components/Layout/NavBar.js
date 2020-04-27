import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        width: "100%",
        padding: "0",
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundColor: "rgba(177,27,27,1)",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        display: "flex",
        alignItems: "center",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
}));

const NavBar = ({ handleDrawerOpen, open, auth, logout, history }) => {
    const classes = useStyles();

    const handleLogout = () => {
        window.location.href = "/";
        logout();
    };

    const loginOrProfile = (auth) => {
        return auth.validToken && auth.user ? (
            <div>
                <Button color="inherit" component={RouterLink} to="/profile">
                    {auth.user && auth.user.fullName}
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        ) : (
            <div>
                <Button color="inherit" component={RouterLink} to="/login">
                    Login
                </Button>
                <Button color="inherit" component={RouterLink} to="/signup">
                    Sign Up
                </Button>
            </div>
        );
    };

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
        >
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        <RouterLink
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Hype4fitness
                        </RouterLink>
                    </Typography>
                    <div>{loginOrProfile(auth)}</div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(NavBar));
