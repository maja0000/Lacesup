import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Collection.css';
import ColorModal from '../modals/ColorModal';
import './eachCollection.css';
import CreateIcon from '@material-ui/icons/Create';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    margin: '20px',
  },
});

export default function CollectionColors() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (test) => {
    setOpen(false);
  };
  return (
    <div>
      <div className='card-container'>
        <Card className={classes.root}>
          <div className='rectangle' onClick={handleClickOpen}></div>
        </Card>
        <Card className={classes.root}>
          <div className='card-buttons'>
            <div className='pen'>
              <CreateIcon />
            </div>
            <div className='pen'>
              <GradeIcon />
            </div>
          </div>
        </Card>{' '}
        <p
          style={{
            textAlign: 'center',
            color: '#404041',
            margin: '0 20px 0 20px',
          }}>
          Blue
        </p>
      </div>
      <ColorModal handleClose={handleClose} open={open}></ColorModal>
    </div>
  );
}
