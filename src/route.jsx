import {
    createBrowserRouter,
  
  } from "react-router-dom";

import LandingPage from './page/landingPage'
import Home from './page/home'
import Login from './page/auth/login'
import Register from './page/auth/register'
 const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      loader: null,
      
    },
    {
      path: "/signin",
      element: <Login/>,
      loader: null,
      
    },   {
      path: "/signup",
      element: <Register/>,
      loader: null,
      
    },
    {
      path: null,
      element: <LandingPage/>,
      loader: null,
      children: [
        {
          path: "/home",
          element: <Home/>,
          loader: null,
          
        },

      ]
    },


  ]);

  export default router