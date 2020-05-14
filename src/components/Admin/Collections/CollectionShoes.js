import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './eachCollection.css';
import CreateIcon from '@material-ui/icons/Create';
import GradeIcon from '@material-ui/icons/Grade';
import '../Collection.css';
import ShoeModal from '../modals/ShoeModal';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
    margin: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
  },
});

export default function CollectionShoes() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [shoes, setShoes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  let pictures = shoes.map((e) => e.colorVariants[0].image);

  React.useEffect(() => {
    fetch('https://laceup-backend.herokuapp.com/')
      .then((res) => res.json())
      .then((res) => {
        setShoes(res.result);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);
  console.log(shoes);
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

      {shoes.map((shoe, index) => (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
          <div
            className={classes.root}
            style={{
              cursor: ' pointer',
              backgroundImage: `url(${shoe.colorVariants[0].image})`,
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
            {shoe.brand}
          </p>

          <ShoeModal handleClose={handleClose} open={open}></ShoeModal>
        </div>
      ))}
      <ShoeModal handleClose={handleClose} open={open}></ShoeModal>
    </div>
  );
}
