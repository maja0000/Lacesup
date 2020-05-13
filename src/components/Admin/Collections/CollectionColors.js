import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    margin: '20px',
  },
});

export default function CollectionColors() {
  const classes = useStyles();

  return (
    <div className="card-container">
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
    </div>
  );
}
