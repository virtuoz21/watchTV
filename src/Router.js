
  import { createBrowserRouter } from 'react-router-dom';
  import Main from './layout/Main';
  import Home from './pages/Home';
  import TvShows from './pages/TVShows';
  import NotFound from './pages/NotFound';
  import FilmDetails from './pages/FilmDetails';
import Auth from './layout/Auth';
import Register from './pages/Auth/Register';
 

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
        // {
        //   path:"/tvshows",
        //   element:<TvShows/>
        // },
        // {
        //   path:"/show/:filmId",
        //   element:<FilmDetails/>
        // },
      ]
    }
  ])

  export default router;
