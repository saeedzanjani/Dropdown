// Packages
import { createBrowserRouter } from "react-router-dom";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";

// Files
import { routes } from "./routes";
import { IRoute } from "../DTOs/interfaces/route.model";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routes.map((route: IRoute) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
    </>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
