import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './eachCollection.css';
const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  },
});

export default function CollectionColors() {
  const classes = useStyles();

  return (
    <div className="card-container">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Card className={classes.root}>
          <div className="card-buttons">
            <div className="pen">pensil</div>
            <div className="pen">star</div>
          </div>
        </Card>{' '}
        <p
          style={{
            textAlign: 'center',
            color: '#404041',
            margin: '0 20px 0 20px',
          }}
        >
          Blue
        </p>
      </div>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
      <Card className={classes.root}></Card>
    </div>
  );
}
