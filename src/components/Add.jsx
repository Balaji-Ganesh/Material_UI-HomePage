import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    color: "blue",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  inputField: {
    width: "100%",
    color: "red",
  },
  form: {
    padding: theme.spacing(2),
  },
  formField: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const styleClasses = useStyles();
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [alertMsgOpen, setAlertMsgOpen] = useState(false);

  // handlers
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertMsgOpen(false);
  };
  return (
    <>
      <Tooltip
        title="Add"
        aria-label="add"
        onClick={() => setOpenDialogBox(true)}
      >
        <Fab color="primary" className={styleClasses.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={openDialogBox}>
        <Container className={styleClasses.container}>
          <form className={styleClasses.form} autoComplete="off">
            <div className={styleClasses.formField}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Title"
                size="small"
                className={styleClasses.inputField}
              />
            </div>
            <div className={styleClasses.formField}>
              <TextField
                id="outlined-basic"
                multiline
                rows={4}
                defaultValue="Tell your story...."
                variant="outlined"
                className={styleClasses.inputField}
              />
            </div>
            <div className={styleClasses.formField}>
              <TextField select label="visible">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Public">Private</MenuItem>
                <MenuItem value="Public">Protected</MenuItem>
                <MenuItem value="Public">Hidden</MenuItem>
                <MenuItem value="Public">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={styleClasses.formField}>
              <FormLabel id="demo-radio-buttons-group-label">
                Who can comment?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="everybody"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="friends-only"
                  control={<Radio size="small" />}
                  label="Friends Only"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="NoBody"
                />
                <FormControlLabel
                  value="custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom {Premium}"
                />
              </RadioGroup>
            </div>
            <div className={styleClasses.formField}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setAlertMsgOpen(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpenDialogBox(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={alertMsgOpen}
        autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{vertical: 'bottom', horizontal:'left'}}
      >
        <Alert onClose={handleClose} severity="success">
          Post has been created..!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
