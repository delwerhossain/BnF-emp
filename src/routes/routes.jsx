import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthenticationPage/Login";
import Register from "../pages/AuthenticationPage/Register";
import PrivateRoute from "./PrivateRoute";
import Attendants from "../pages/Attendants/Attendants";
import EmpTables from "../pages/EmpTables/EmpTables";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all",
        element: (
          <PrivateRoute>
            <EmpTables />
          </PrivateRoute>
        ),
      },
      {
        path: "/attendants",
        element: (
          <PrivateRoute>
            <Attendants />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
