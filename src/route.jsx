import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./page/landingPage";
import Home from "./page/home";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import Profile from "./page/profile";
import RequireAuth from "./components/RequireAuth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    loader: null,
  },
  {
    path: "/signin",
    element: <Login />,
    loader: null,
  },
  {
    path: "/signup",
    element: <Register />,
    loader: null,
  },
  {
    path: null,
    element: <RequireAuth />,
    loader: null,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: null,
      },
      {
        path: "/board",
        element: <Profile />,
        loader: null,
      },
      {
        path: "/history",
        element: <Profile />,
        loader: null,
      },
      {
        path: "/Profile",
        element: <Profile />,
        loader: null,
      },
    ],
  },
]);

export default router;
