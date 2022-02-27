import { Container, makeStyles } from "@material-ui/core";
import Post  from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const styleClasses = useStyles();
  return (
    <>
      <Container className={styleClasses.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
    </>
  );
};

export default Feed;
