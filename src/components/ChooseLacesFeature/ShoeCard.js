import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    minWidth: 350,
  },
  media: {
    minHeight: '350px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ShoeCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <CardMedia
          className={classes.media}
          image="/pictures/00_Mock_converse_altas-zapas.jpg"
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              alt="cross laces"
              src={require('../../pictures/ex.svg')}
              height="30"
              width="30"
              style={{
                border: '1px solid grey',
                borderRadius: '5px',
                marginRight: '5px',
              }}
            />
            <img
              alt="straight laces"
              src={require('../../pictures/straight.svg')}
              height="30"
              width="30"
              style={{ border: '1px solid grey', borderRadius: '5px' }}
            />
          </div>
        </CardMedia>
      </CardContent>
    </Card>
  );
}
