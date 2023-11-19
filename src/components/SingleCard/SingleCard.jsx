import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import '../../singleCard.css'

 function SingleCard({
    id,
    name,
    time,
    image
 }) {

    const handleClick = (id) =>{
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
        sx={{
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
        }}
      >
        <CardContent>
          <Typography variant="h5" color= "white">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {time}
          </Typography>
        </CardContent>

        <div className='btn'
           onClick={() => handleClick(id)}
            >
            Show More
        </div>
      </Card>
    </CardActionArea>
    </Card>
  );
}

export default SingleCard;