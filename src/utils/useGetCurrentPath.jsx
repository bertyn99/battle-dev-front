import { matchRoutes, useLocation } from "react-router-dom";

const routes = [{ path: "/home" }, { path: "/board/*" }, { path: "/history" }];

const useGetCurrentPath = () => {
  const { pathname } = useLocation();
  const match = matchRoutes(routes, pathname);
  return match ? match[0].pathnameBase : pathname;
};

export default useGetCurrentPath;
