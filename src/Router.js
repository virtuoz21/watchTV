// import logo from './logo.svg';
// import Navigation from './components/Navigation/Navigations';
// import React from 'react';
// import SingleCard from './components/SingleCard/SingleCard';
// import Grid from "@mui/material/Grid";
// import Footer from './components/Footer/Footer';
// import './App.css';
  import { createBrowserRouter } from 'react-router-dom';
  import Main from './layout/Main';
  import Home from './pages/Home';
  import TvShows from './pages/TVShows';
  import NotFound from './pages/NotFound';
  import FilmDetails from './pages/FilmDetails';
  import SingleItemHeader from './components/SingleItemHeader/SingleItemHeader';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFound/>,
      children:[
        {
          path:"/home",
          element:<Home/>,
        },
        {
          path:"/tvshows",
          element:<TvShows/>
        },
        {
          path:"/show/:filmId",
          element:<FilmDetails/>
        },
        {
        path:"/tvshows/:id",
        element:<SingleItemHeader/>
        }
      ]
    }
  ])

  export default router;
// const mockData = [
//   {
//     id: 1, 
//     name: 'Home Alone', 
//     image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/922/1770000922/1770000922-h",  
//     time: '1hr: 50mins'
//     }, 
//     {
//     id: 2, 
//     name: 'Black Adam', 
//     image: "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",  
//     time: '2hr: 10mins'
//     }, 
//     {id: 3, 
//     name: 'Back to the Future', 
//     image: "https://static1.squarespace.com/static/5c62c09c4d546e27dc1016c7/t/653ffe22872886679b3f9c6e/1698692642521/ff68e65f5d5ee5dd98fc71c1218a71e3e1008668880b6430d4e912ebf5bda412._UR1920%2C1080_.jpg?format=1500w", 
//     time: '2hr: 50mins'
//     }, 
//     {
//     id: 4, 
//     name: 'Avengers', 
//     image: "https://www.pluggedin.com/wp-content/uploads/2019/12/the-avengers-review-image-1200x688.jpg", 
//     time: '2hr:30mins'
//     }
//     ]

// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       <Grid container spacing={2} sx={{padding:"50px"}}>
//       {mockData.map(({id, name, image, time}, index) => (
//       <Grid item xs={3} key={index}>
//       <SingleCard
//       id={id}
//       name={name}
//       time={time}
//       image={image}
//       />
//       </Grid>
//       ))}
//       </Grid>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
