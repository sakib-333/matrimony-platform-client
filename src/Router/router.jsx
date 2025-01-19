import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import BiodatasPage from "../Pages/BiodatasPage/BiodatasPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import CheckUserExistence from "../Components/CheckUserExistence/CheckUserExistence";
import BiodataDetails from "../Pages/BiodataDetails/BiodataDetails";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/biodatas",
        element: <BiodatasPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <CheckUserExistence>
            <LoginPage />
          </CheckUserExistence>
        ),
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/biodata/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
