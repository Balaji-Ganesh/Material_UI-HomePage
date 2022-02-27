import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Home,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Bookmark,
  TabletMac,
  Storefront,
  List,
  Settings,
  ExitToApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(2),
    color: "white",
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      // for non-mobile devices
      backgroundColor: "white",
      color: "#555",
      borderRight: "2px solid #999",
    },
  },
  listItems: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4), // for mobile devices..
    [theme.breakpoints.up("sm")]: {
      // for non-mobile devices
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  itemIcon: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  itemContent: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const styleClasses = useStyles();
  return (
    <>
      <Container className={styleClasses.container}>
        <div className={styleClasses.listItems}>
          <Home className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Home</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <Person className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Friends</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <List className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Lists</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <PhotoCamera className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Camera</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <PlayCircleOutline className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Videos</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <TabletMac className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Apps </Typography>
        </div>
        <div className={styleClasses.listItems}>
          <Storefront className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>
            Market place
          </Typography>
        </div>
        <div className={styleClasses.listItems}>
          <Bookmark className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Settings</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <Settings className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Settings</Typography>
        </div>
        <div className={styleClasses.listItems}>
          <ExitToApp className={styleClasses.itemIcon} />
          <Typography className={styleClasses.itemContent}>Logout</Typography>
        </div>
      </Container>
    </>
  );
};

export default Leftbar;
