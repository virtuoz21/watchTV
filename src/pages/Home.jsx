import { useEffect, useState, useRef } from 'react';
// import  Navigation  from '../components/Navigation/Navigation';
import SingleCard from '../components/SingleCard/SingleCard';
import Grid from "@mui/material/Grid";
import axios from 'axios';
import useRequest from '../hooks/useRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/SearchSlice';

const inputStyle = {
    color:'white',
    backgroundColor:'rgba(209, 208, 207,.6)',
    height:'30px',
    border:'none',
    width:'20rem',
}

function Home () {
    const [selectedFilm, setSelectedFilm] = useState(null);
  
    const apiSearch = useSelector((state) => state.search.search);
    const apiData = useRequest(apiSearch);

    const searchRef = useRef("")
    const dispatch = useDispatch();


  useEffect(() => {
    searchRef.current.focus();
  },[]);

  const handleCardClick = (id) => {
    setSelectedFilm(id)
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <Grid container  
      sx={{
        display:'flex', 
        justifyContent:'center', 
        paddingTop: '20px', 
        paddingBottom:'3rem'}}>
        <input 
        type='text'
        style={inputStyle} 
        value={apiSearch} 
        onChange={handleSearch} 
        ref={searchRef}
        />
      </Grid>
     
      <Grid container spacing={2} sx={{padding:"15px"}}>
     {apiData.map(({id, name, genre, image, premiered,}, index) => (
      <Grid item xs={3} key={index}>
      <SingleCard
        id={id}
        name={name} 
        time={premiered}
        genre={genre}
        image={image ? image.medium || "" : ""}
        onClick={handleCardClick} 
      />
      </Grid>
      ))}
    </Grid>
    </>
  );
}

export default Home;