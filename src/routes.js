import * as React from "react";
import { useRoutes } from "react-router-dom";
import UserPage from "./components/user_";
import Login from "./feature/login";

function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: null,
      children: [
        {
          path: "",
        //   element: <Login />,
          element: <UserPage />,
        },
      ],
    },
  ]);

  return element;
}
export default Router;
