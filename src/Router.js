
  import { createBrowserRouter } from 'react-router-dom';
  import Main from './layout/Main';
  import Home from './pages/Home';
  import TvShows from './pages/TVShows';
  import NotFound from './pages/NotFound';
  import FilmDetails from './pages/FilmDetails';
  import Auth from './layout/Auth';
  import Register from './pages/Auth/Register';
  import ActorInfo from './pages/ActorInfo';
  import AboutUs from './pages/AboutUs';
 

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
          path:"/shows",
          element:<TvShows/>
        },
        {
          path:'/shows/:genre',
          element:<TvShows/>
        },
        {
          path:'/aboutus',
          element:<AboutUs/>
        },
        {
          path:"/show/:filmId",
          element:<FilmDetails/>
        },
        {
          path:"/actor/:id",
          element:<ActorInfo/>
        }
      ]
    },
    {
      path: "auth/",
      element: <Auth/>,
      errorElement: <NotFound/>,
      children:[
        {
          path:"register",
          element:<Register/>,
        },
      ]
    }
  ])

  export default router;
