import { Link, useParams } from "react-router-dom";
import useActorInfo from "../hooks/useReqActorInfo";
import { DEFAULT_ACTOR_IMAGE } from "../constants/constants";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { DEFAULT_IMAGE } from "../constants/constants";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/bundle';
import './actorInfo.css';


function ActorInfo() {
  const { id } = useParams();
  const { actorData } = useActorInfo(id);
  console.log(actorData);

  const countryName = actorData.country ? actorData.country.name : 'Unknown';

  return (
    <>
      <div className="main">
        <div>
          <img
            className="actor_info_image"
            src={
              actorData.image
                ? actorData.image.original || DEFAULT_ACTOR_IMAGE
                : DEFAULT_ACTOR_IMAGE
            }
            alt={`Image ${actorData.name || 'Unknown'}`}
          />
          <h1 className="personal_info">Personal Info</h1>
          <div className="info_icons">
            <div className="icons_all">
              <FacebookIcon style={{ color: 'red', fontSize: '2rem' }} />
            </div>
            <div className="icons_all">
              <TwitterIcon style={{ color: 'red', fontSize: '2rem' }} />
            </div>
            <div className="icons_all">
              <InsertLinkIcon style={{ color: 'red', fontSize: '2rem' }} />
            </div>
          </div>
          <span className="actor_api">Birthday</span>
          <p>{actorData.birthday}</p>
          <span className="actor_api">Country</span>
          <p>{countryName}</p> 
          <span className="actor_api">Gender</span>
          <p>{actorData.gender}</p>
        </div>

        <div className="right swiper-container">
          <h1
            style={{
              color: 'white',
              fontSize: '3rem',
              margin: '0',
            }}
          >
            {actorData.name || 'Unknown'}
          </h1>
          <p>Bio</p>
          <hr />
          <h1 className="acting">Acting in</h1>
          <div className="carousel_acting">
            <Swiper
            className="swiper-wrapper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            style={{margin:'0', width:'70%'}}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          {actorData?.casts && actorData.casts.map((casts, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <Card sx={{ maxWidth: 345, position: 'relative' }}>
                <Link 
                      to={`/show/${casts.id}`}
                      >
                  <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350px"
                    width="200px"
                    style={{ objectFit: 'fill' }}
                    image={casts.image ? casts.image.original || DEFAULT_IMAGE : DEFAULT_IMAGE}
                    alt="image"
                  />
                  <div className="actor_info_card">
                      <Typography variant="h5" component="div">
                        {casts.name}
                      </Typography>
                  </div>
              </CardActionArea>
              </Link>
            </Card>
          </SwiperSlide>
          ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
          </div> 

        </div>
      </div> 
    </>
  );
}

export default ActorInfo;