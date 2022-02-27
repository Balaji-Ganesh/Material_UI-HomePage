import { Grid, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Add from './components/Add';

const useStyles = makeStyles((theme) => ({
  itemContent: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const styleClasses = useStyles();
  return (
    <>
      <NavBar />
      <Grid container>
        {/* for left bar*/}
        <Grid item sm={2} xs={1.1}>
          <Leftbar />
        </Grid>

        {/* for feed - large area.. */}
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        {/* for right pane */}
        <Grid item sm={3} className={styleClasses.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add/>
    </>
  );
}

export default App;
