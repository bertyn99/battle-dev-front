import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./page/landingPage";
import Home from "./page/home";
import Login from "./page/auth/login";
import Register from "./page/auth/register";
import Profile from "./page/profile";
import RequireAuth from "./components/RequireAuth";
import { store } from "./store";
import { userApiSlice } from "./store/api/userApiSlice";
import { rankApiSlice } from "./store/api/rankApiSlice";
import History from "./page/history";
import Board from "./page/board";
import Ranking from "./page/board/ranking";
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
        path: "/board/*",
        element: <Board />,
        children: [
          {
            path: "",
            element: <Ranking d={"all"} />,
            loader: null,
          },
          {
            path: ":id",
            element: <Ranking d={"me"} />,
            loader: null,
          },
        ],
        /* loader: async () => {
          const user = store.getState(auth).user;
          if (user || user._id) return;
          const p = store.dispatch(
            rankApiSlice.endpoints.getMyBoard.initiate()
          );

          try {
            const response = await p.unwrap();
            return response;
          } catch (e) {
            // see https://reactrouter.com/en/main/fetch/redirect
            return redirect("/login");
          } finally {
            p.unsubscribe();
          }
        }, */
      },
      {
        path: "/history",
        element: <History />,
        loader: null,
      },
      {
        path: "/Profile",
        element: <Profile />,
        loader: async () => {
          const p = store.dispatch(userApiSlice.endpoints.getMyInfo.initiate());

          try {
            const response = await p.unwrap();
            return response;
          } catch (e) {
            // see https://reactrouter.com/en/main/fetch/redirect
            return redirect("/login");
          } finally {
            p.unsubscribe();
          }
        },
      },
    ],
  },
]);

export default router;
