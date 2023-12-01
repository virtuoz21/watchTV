import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/singleItemTabs/SingleItemTabs";





function FilmDetails() {
    const { filmId } = useParams();
    const [filmData, setFilmData] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    console.log(filmData)
    useEffect(() => {
        async function fetchFilmData() {
          try {
            const response = await axios.get(
              `https://dolphin-app-pc6ii.ondigitalocean.app/article/${filmId}`
            );
            setFilmData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchFilmData();
      }, [filmId]);
    
      if (!filmData) {
        return <div>Loading...</div>;
      }
    
      const {
        name,
        rating,
        genres,
        averageRuntime,
        premiered,
        image,
        summary,
        status,
        series,
        views
      } = filmData;
    
      const handleChangeTab = (event, newValue) => {
        setActiveTab(newValue);
      };
    
      return (
        <>
          <SingleItemHeader
            name={name}
            rating={rating}
            genres={genres}
            averageRuntime={averageRuntime}
            premiered={premiered}
            image={image}
            summary={summary}
            views={views}
          />
            <SingleItemTabs
              summary={summary}
              status={status}
              genres={genres}
              series={series}
          />
        </>
      );
    }

export default FilmDetails;