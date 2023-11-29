import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE } from '../../constants/constants';
import './singleCard.css'
import { Link } from 'react-router-dom';

 const cardStyle = {
      maxWidth: 345,
      background: `linear-gradient(
                90deg, 
                rgba(0, 0, 0, 0.80) 0%,  
                rgba(20, 20, 20, 0.40) 50%,  
                rgba(83, 100, 141, 0.00) 100%
              )`,
      position: "absolute",
      width: "395px",
      height: "222px",
      color:"white",
      display:'flex', 
      flexDirection:'column', 
      justifyContent: 'center', 
      textAlign:'left'
 };

function SingleCard({
    id,
    name,
    time,
    image = DEFAULT_IMAGE,
 }) {

    const handleClick = () =>{
        console.log(`Film id:${id}`)
    }
  return (
    <Card
      sx={{maxWidth: 345,}}
    >
     <CardActionArea sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CardMedia
        sx={{
          width: "395px",
          height: "222px",
          position: "relative",
         
        }}
        image={image}
        alt="Image"
      />
      <Card className='card'
        sx={cardStyle}
      >
        <CardContent>
          <Typography variant="h5" color= "white">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {time}
          </Typography>
        </CardContent>

        <Link className='btn'
           to={`/tvshows/${id}`}
            >
            Show More
        </Link>
      </Card>
    </CardActionArea>
    </Card>
  );
}

export default SingleCard;