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
            element: <Ranking type={"all"} />,
            loader:  async () => {
            
              const data = store.dispatch(
                rankApiSlice.endpoints.getTopBoard.initiate()
              );
    
              try {
                const response = await data.unwrap();
                return response.data;
              } catch (e) {
                // see https://reactrouter.com/en/main/fetch/redirect
                return redirect("/login");
              } finally {
                data.unsubscribe();
              }
            },
          },
          {
            path: ":id",
            element: <Ranking type={"me"} />,
            loader:  async () => {
            
              const data = store.dispatch(
                rankApiSlice.endpoints.getMyBoard.initiate()
              );
    
              try {
                const response = await data.unwrap();
                return response.data;
              } catch (e) {
                // see https://reactrouter.com/en/main/fetch/redirect
                return redirect("/login");
              } finally {
                data.unsubscribe();
              }
            },
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
          const {user} = store.getState().auth;
         console.log(user)
          if (user==null) {
            const p = store.dispatch(
              userApiSlice.endpoints.getMyInfo.initiate()
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
          }
          return null
        },
      },
    ],
  },
]);

export default router;
