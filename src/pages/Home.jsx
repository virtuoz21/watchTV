import { useEffect, useState, useRef } from "react";
import SingleCard from "../components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid";
import useRequest from "../hooks/useRequest";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/SearchSlice";
import { DEFAULT_IMAGE } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import useReqGenre from "../hooks/useReqGenre";
import "./home.css";

const inputStyle = {
  color: "white",
  backgroundColor: "rgba(209, 208, 207,.6)",
  height: "30px",
  border: "none",
  width: "25rem",
};

function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const actionFilms = useReqGenre(
    "http://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action"
  );
  const comedyFilms = useReqGenre(
    "http://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy"
  );

  const apiSearch = useSelector((state) => state.search.search);
  const apiData = useRequest(apiSearch);

  const searchRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleCardClick = (id) => {
    setSelectedFilm(id);
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "3rem",
        }}
      >
        <input
          placeholder="Search..."
          type="text"
          style={inputStyle}
          value={apiSearch}
          onChange={handleSearch}
          ref={searchRef}
        />
      </Grid>

      <Grid container spacing={2} sx={{ padding: "15px", height: "100%" }}>
        {apiData.map(({ id, name, genres, image, premiered }, index) => (
          <Grid item xs={3} key={index}>
            <SingleCard
              id={id}
              name={name}
              time={premiered}
              genre={genres}
              image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
              onClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <h1 style={{ marginLeft: "1.5rem" }} className="title" variant="h3">
            Action Shows
          </h1>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ margin: "25px 20px" }}
            spaceBetween={20}
            slidesPerView={5}
            initialSlide={7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {actionFilms?.map((show, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={
                    show.image
                      ? show.image.medium || DEFAULT_IMAGE
                      : DEFAULT_IMAGE
                  }
                  onClick={handleCardClick}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ marginLeft: "1.5rem" }} className="title" variant="h3">
            Comedy Shows
          </h1>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ margin: "25px 20px" }}
            spaceBetween={30}
            slidesPerView={5}
            initialSlide={7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {comedyFilms?.map((show, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={
                    show.image
                      ? show.image.medium || DEFAULT_IMAGE
                      : DEFAULT_IMAGE
                  }
                  onClick={handleCardClick}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
