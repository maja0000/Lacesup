import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './eachCollection.css';
import CreateIcon from '@material-ui/icons/Create';
import GradeIcon from '@material-ui/icons/Grade';
import LaceModal from '../modals/LaceModal';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  },
});

export default function CollectionLaces() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [laces, setLaces] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetch('https://laceup-backend.herokuapp.com/laces/')
      .then((res) => res.json())
      .then((res) => {
        setLaces(res.result);
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
    <div className='card-container'>
      <Card className={classes.root} onClick={handleClickOpen}>
        <div className='rectangle'></div>
      </Card>
      {laces.map((lace, index) => (
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          key={index}
          onClick={handleClickOpen}>
          <div
            className={classes.root}
            style={{
              cursor: ' pointer',
              backgroundImage: `url(${lace.pattern})`,
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
              lace: '#404041',
              margin: '0 20px 0 20px',
            }}>
            {lace.name}
          </p>
        </div>
      ))}
      <LaceModal handleClose={handleClose} open={open}></LaceModal>
    </div>
  );
}
