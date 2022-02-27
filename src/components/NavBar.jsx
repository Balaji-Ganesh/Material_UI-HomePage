import { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    alignItems: "center",
  },
  logoLg: {
    display: "none",
    // @media-queries: if screen-size is above (sm:600px) inclusive..
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    // @media-queries: if screen-size is above (sm:600px) inclusive..
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "55%",
    // Make it responsive..
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearchBarStatus ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancelOption: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearchBarStatus ? "block" : "none"),
    },
    marginLeft: theme.spacing(1),
  },
  badges: {
    display: (props) => (props.openSearchBarStatus ? "none" : "flex"),
    alignItems: "center ",
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const NavBar = () => {
  // hooks..
  const [openSearchBarStatus, setOpenSearchBarStatus] = useState(false); // for toggling search bar and close..
  // styles..
  const styleClasses = useStyles({ openSearchBarStatus }); // Passing the state.. to styling. There via `props` it gets accessed. Analogous to the props between React components.
  return (
    <>
      <AppBar position="static ">
        <Toolbar className={styleClasses.toolbar}>
          <Typography variant="h6" className={styleClasses.logoLg}>
            LargeSize-Logo
          </Typography>
          <Typography variant="h6" className={styleClasses.logoSm}>
            SmallSize-Logo
          </Typography>
          <div className={styleClasses.search}>
            <Search />
            <InputBase
              placeholder="Search for.."
              className={styleClasses.input}
            />
          </div>
          <Cancel
            className={styleClasses.cancelOption}
            onClick={() => setOpenSearchBarStatus(false)}
          />
          <div className={styleClasses.badges}>
            <Search
              className={styleClasses.searchButton}
              onClick={() => setOpenSearchBarStatus(!openSearchBarStatus)}
            />{" "}
            {/** For low width screens. -- Responsive purpose. */}
            <Badge
              badgeContent={52}
              color="secondary"
              className={styleClasses.badge}
            >
              <Mail />
            </Badge>
            <Badge
              badgeContent={5}
              color="secondary"
              className={styleClasses.badge}
            >
              <Mail />
            </Badge>
            <Avatar
              alt="Profile Image"
              src="https://cdn-icons.flaticon.com/png/512/4140/premium/4140037.png?token=exp=1642932233~hmac=0db6c8dea047cd3461bd2c720a3cdc62"
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
