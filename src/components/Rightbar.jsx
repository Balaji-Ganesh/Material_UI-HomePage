import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "absolute",
    position: "sticky",
    top: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  }
}));

const RightBar = () => {
  const styleClasses = useStyles();
  return (
    <>
      <Container className={styleClasses.container}>
        <Typography className={styleClasses.title} gutterBottom>
          Recent Contacts..
        </Typography>
        <AvatarGroup max={3} style={{ marginBottom: 20 }}>
          <Avatar
            alt="Person 1"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Person 2"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Person 3"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Person 4"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
        </AvatarGroup>
        <Typography className={styleClasses.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={100} className={styleClasses.imageList} cols={3}>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc="
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/train-your-brain-dice-form-the-words-train-and-brain-picture-id1289044293?b=1&k=20&m=1289044293&s=170667a&w=0&h=GfmZQuYlt4si7Rg9GWwKnEK_jeqH-ExU1wBR4rOi_Rk="
              alt="some-image"
            ></img>
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/photos/american-football-teams-start-game-professional-players-aggressive-picture-id1355087243?b=1&k=20&m=1355087243&s=170667a&w=0&h=hXdZAGsenEkLwD_Rt1EhmVROlpF6oSwsMLpxs7Ae_fA="
              alt="some-image"
            ></img>
          </ImageListItem>
        </ImageList>
        <Typography className={styleClasses.title} gutterBottom>
          Categories
        </Typography>
        <Typography className={styleClasses.title} gutterBottom>
          <Link href="#" className={styleClasses.link} variant="body2">
            Literature
          </Link>
          <Link href="#" className={styleClasses.link} variant="body2">
            Sports
          </Link>
          <Link href="#" className={styleClasses.link} variant="body2">
            Food
          </Link>
          <Divider flexItem />
          <Link href="#" className={styleClasses.link} variant="body2">
            Entertainment
          </Link>
          <Link href="#" className={styleClasses.link} variant="body2">
            Sports
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default RightBar;
