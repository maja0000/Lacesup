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
  upload: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '712.42px',
    justifyContent: 'space-between',
  },
  uploadButtons: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: '-30px',
  },
}));

export default function LaceModal({ handleClose, open }) {
  const [selectedFile, setSelectedFile] = React.useState('');
  const [fileName, setFileName] = React.useState();
  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [favorite, setFavorite] = React.useState(false);

  const classes = useStyles();
  const submitForm = () => {
    fetch('https://laceup-backend.herokuapp.com/laces', {
      method: 'post',
      body: JSON.stringify({
        name: name,
        laceImg: selectedFile,
        favorite: favorite,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  const handleUpload = (event) => {
    const reader = new FileReader();
    reader.onloadend = function (event) {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        PaperProps={{
          style: {
            backgroundColor: '#FFFFFF',
            borderRadius: '27px',
            minWidth: '833px',
            height: '468px',
          },
        }}>
        <DialogTitle id='form-dialog-title'>New / Edit Color</DialogTitle>
        <Divider />
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='name'
            value={name}
            placeholder='Enter a name for the lace'
            onChange={(e) => setName(e.target.value)}
            fullWidth
            className={classes.formField}
          />
          <div className={classes.upload}>
            <label
              htmlFor='icon-button-file'
              style={{
                width: '100%',
                height: '40px',
                marginLeft: '31px',
                marginBottom: '-12px',
              }}>
              {fileName}
            </label>
            <input
              accept='image/*'
              className='fileUpload'
              type='file'
              id='icon-button-file'
              onChange={handleUpload}
              style={{ width: '100%', visibility: 'hidden' }}
            />
            <div className={classes.uploadButtons}>
              <DeleteForeverOutlinedIcon
                color='disabled'
                fontSize='large'
                style={{ padding: '5px' }}
              />
              <AttachFileOutlinedIcon
                color='disabled'
                fontSize='large'
                style={{ padding: '5px' }}></AttachFileOutlinedIcon>
            </div>
          </div>
          <Divider style={{ marginLeft: '25px', width: '90%' }} />
          <TextField
            autoFocus
            margin='dense'
            id='url'
            type='url'
            value={url}
            placeholder='Enter the url of the product in the shop'
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
            className={classes.formField}
          />
        </DialogContent>
        <FormGroup style={{ marginLeft: '40px', width: '90%' }}>
          <FormControlLabel
            control={<Checkbox name='checkedC' />}
            label='Mark as favourite'
            value={true}
            onChange={(e) => setFavorite(e.target.value)}
          />
          <FormHelperText style={{ marginLeft: '30px', marginTop: '-13px' }}>
            This will unmark previous favorite laces
          </FormHelperText>
        </FormGroup>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div className={classes.button}>
            <Button
              size='large'
              variant='text'
              fullWidth
              onClick={submitForm}
              style={{ paddingTop: '15px', fontWeight: 'bold' }}>
              Save Lace
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
