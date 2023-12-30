
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
  import Profile from './pages/Auth/Profile';
  import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFound/>,
      children:[
        {
          path:"/home",
          element:<PrivateRoute><Home/></PrivateRoute>,
        },
        {
          path:"/shows",
          element:<PrivateRoute><TvShows/></PrivateRoute>,
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
        },
        {
        path:"/profile",
        element:<Profile/>
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
