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

  const [colors, setColors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch('https://laceup-backend.herokuapp.com/color/')
      .then((res) => res.json())
      .then((res) => {
        setColors(res.result);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (test) => {
    setOpen(false);
  };
  return (
    <div>
      <div className='card-container'>
        <Card className={classes.root} onClick={handleClickOpen}>
          <div className='rectangle'></div>
        </Card>
        {colors.map((color, index) => (
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            key={index}
            onClick={handleClickOpen}>
            <div
              className={classes.root}
              style={{
                cursor: ' pointer',
                backgroundImage: `url(${color.file})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
              }}>
              <div className='card-buttons'>
                <div className='pen'>
                  <CreateIcon />
                </div>
                <div className='pen'>
                  <GradeIcon />
                </div>
              </div>
            </div>

            <p
              key={index}
              style={{
                textAlign: 'center',
                color: '#404041',
                margin: '0 20px 0 20px',
              }}>
              {color.name}
            </p>
          </div>
        ))}
        <ColorModal handleClose={handleClose} open={open}></ColorModal>
      </div>
    </div>
  );
}
