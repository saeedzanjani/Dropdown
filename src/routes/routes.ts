// Components
import NotFound from "../views/404/NotFound";
import Home from "../views/home/Home";

// Files
import { IRoute } from "../DTOs/interfaces/route.model";

// Routes
export const routes: IRoute[] = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "*",
    element: NotFound,
  },
];
