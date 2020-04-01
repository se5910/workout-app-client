import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    backgroundColor: "black"
  },
  list: {
    width: 250
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = open => e => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setState({ ...state, left: open });
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Login</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Signup</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <ToolBar>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-haspopup="true"
              aria-controls="menu-appbar"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            HYP4FITNESS
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onclick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </ToolBar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        {sideList}
      </Drawer>
      <sideList></sideList>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
