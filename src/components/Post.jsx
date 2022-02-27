import {
  Button,
  Card,
  CardActionArea,
    CardContent,
  CardActions,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px", //250
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const styleClasses = useStyles();
  return (
    <>
      <Container className={styleClasses.container}>
        <Card className={styleClasses.card}>
          <CardActionArea>
            <CardMedia
              className={styleClasses.media}
              image="https://images.unsplash.com/photo-1494216928456-ae75fd96603d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              title="Blog Post"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>Post Heading</Typography>
              <Typography variant="body2" color="textSecondary">
                Post description. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Nostrum tenetur quas adipisci reiciendis
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Post;
