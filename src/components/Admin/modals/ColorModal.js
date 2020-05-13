import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

const useStyles = makeStyles((theme) => ({
  root: {},

  button: {
    margin: theme.spacing(1),
    background: '#fcb536',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: '50px',
    width: '200px',
  },

  formField: {
    height: '60px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '21.82px',
    width: '90%',
    textAlign: 'left',
    marginLeft: '25px',
    marginRight: 'auto',
    padding: '5px',
  },
}));

export default function ColorModal({ handleClose, open }) {
  const [imageUploaded, setImageUploaded] = React.useState(0);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploaded, setUpLoaded] = React.useState('initial');
  const classes = useStyles();

  const handleUploadClick = (event) => {
    let file = event.target.files[0];
    const reader = new FileReader();
    let url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setSelectedFile([reader.result]);
      console.log(url); // Would see a path?

      setUpLoaded('uploaded');
      setSelectedFile(event.target.files[0]);
      setImageUploaded(1);
    };
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#FFFFFF',
            borderRadius: '27px',
            minWidth: '833px',
            height: '468px',
          },
        }}
      >
        <DialogTitle id="form-dialog-title">New / Edit Color</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="name"
            defaultValue="Enter a name for the color"
            fullWidth
            className={classes.formField}
          />
          <div>
            <input
              accept="image/*"
              className="fileUpload"
              multiple
              type="file"
              onClick={handleUploadClick}
              // style={{ display: 'none' }}
            />
            <label htmlFor="icon-button-file">
              <Button
                component="span"
                size="large"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '40px',
                }}
              >
                <DeleteForeverOutlinedIcon
                  color="disabled"
                  fontSize="large"
                  style={{ padding: '5px' }}
                />
                <AttachFileOutlinedIcon
                  color="disabled"
                  fontSize="large"
                  style={{ padding: '5px' }}
                />
              </Button>
            </label>
          </div>
          <Divider style={{ marginLeft: '25px', width: '90%' }} />
          <TextField
            autoFocus
            margin="dense"
            id="url"
            type="url"
            defaultValue="Enter the url of the product in the shop"
            fullWidth
            className={classes.formField}
          />
        </DialogContent>
        <FormGroup style={{ marginLeft: '40px', width: '90%' }}>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Mark as favourite"
          />
          <FormHelperText style={{ marginLeft: '30px', marginTop: '-13px' }}>
            This will unmark previous favorite laces
          </FormHelperText>
        </FormGroup>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div className={classes.button}>
            <Button
              size="large"
              variant="text"
              fullWidth
              onClick={handleClose}
              style={{ paddingTop: '15px', fontWeight: 'bold' }}
            >
              Save color
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
