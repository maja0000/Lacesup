import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import '../Collection.css';
import ColorModal from '../modals/ColorModal';
import '../Collection.css';

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
          <CardContent>
            <div className='rectangle' onClick={handleClickOpen}></div>
          </CardContent>
        </Card>
        <Card className={classes.root}></Card>
        <Card className={classes.root}></Card>
        <Card className={classes.root}></Card>
        <Card className={classes.root}></Card>
      </div>
      <ColorModal handleClose={handleClose} open={open}></ColorModal>
    </div>
  );
}
