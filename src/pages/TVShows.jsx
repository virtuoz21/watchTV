import React, { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard/SingleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import { DEFAULT_IMAGE } from "../constants/constants";
import { Navigation, EffectCoverflow } from "swiper/modules";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./tvShows.css";
import { setGenre } from "../store/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const GENRES = [
  "Action",
  "Adventure",
  "Anime",
  "Children",
  "Comedy",
  "Crime",
  "DIY",
  "Drama",
  "Espionage",
  "Family",
  "Fantasy",
  "Food",
  "History",
  "Horror",
  "Legal",
  "Medical",
  "Music",
  "Mystery",
  "Nature",
  "Romance",
  "Science-Fiction",
  "Sports",
  "Supernatural",
  "Thriller",
  "Travel",
  "War",
  "Western",
];

const MovieSearch = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const location = useLocation();
  const genreQueryParam = new URLSearchParams(location.search).get("genre");
  const initialGenre = genreQueryParam || "";

  const dispatch = useDispatch();
  const genre = useSelector((state) => state.search.genre);

  useEffect(() => {
    if (genreQueryParam) {
      setSelectedGenre(initialGenre);
      dispatch(setGenre(initialGenre));
    }
  }, [initialGenre, genreQueryParam, dispatch]);

  useEffect(() => {
    if (!genre) {
      return;
    }

    setLoadingMovies(true);

    const apiUrl = `http://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genre}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoadingMovies(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingMovies(false);
      });
  }, [genre]);

  useEffect(() => {
    if (!genreQueryParam) {
      return;
    }

    setLoadingMovies(true);

    const apiUrl = `https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genreQueryParam}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoadingMovies(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingMovies(false);
      });
  }, [genreQueryParam]);

  const handleGenreChange = (event) => {
    const newGenre = event.target.value;
    setSelectedGenre(newGenre);
    dispatch(setGenre(newGenre));
  };

  return (
    <div className="genre_selector" style={{ width: "100%" }}>
      <h1>Search shows by genre</h1>
      <>
        <FormControl fullWidth sx={{ width: "20%", marginBottom: "50px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{ "&.Mui-focused": { color: "white" }, color: "white" }}
          >
            Genre:
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            label="Genre:...."
            onChange={handleGenreChange}
            sx={{
              "&.Mui-focused": {
                "& fieldset": {
                  borderColor: "red !important",
                },
              },
            }}
          >
            {GENRES.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>

      <div style={{ width: "100%" }}>
        {loadingMovies ? (
          ""
        ) : (
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
            {movies.length === 0 ? (
              <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
                There are no films in the selected genre 😢
              </p>
            ) : (
              movies.map((show, index) => (
                <SwiperSlide key={index}>
                  <SingleCard
                    height={"500px"}
                    id={show.id}
                    name={show.name}
                    time={show.premiered}
                    image={
                      show.image
                        ? show.image.medium || DEFAULT_IMAGE
                        : DEFAULT_IMAGE
                    }
                  />
                </SwiperSlide>
              ))
            )}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
