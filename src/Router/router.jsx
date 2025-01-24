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
import MyBiodata from "../Pages/MyBiodata/MyBiodata";
import ViewMyBiodata from "../Pages/ViewMyBiodata/ViewMyBiodata";
import MyFavouritesBiodatas from "../Pages/MyFavouritesBiodatas/MyFavouritesBiodatas";
import MyContactRequest from "../Pages/MyContactRequest/MyContactRequest";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import GeneralDashboard from "../Pages/DashboardPage/GeneralDashboard";
import AdminHome from "../Pages/AdminDashboard/AdminHome/AdminHome";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers/ManageUsers";
import ApprovedPremium from "../Pages/AdminDashboard/ApprovedPremium/ApprovedPremium";
import GotMarried from "../Pages/GotMarried/GotMarried";

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
        children: [
          // General users
          {
            path: "myBiodata",
            element: (
              <PrivateRoute>
                <MyBiodata />
              </PrivateRoute>
            ),
          },
          {
            path: "viewMyBiodata",
            element: (
              <PrivateRoute>
                <ViewMyBiodata />
              </PrivateRoute>
            ),
          },
          {
            path: "gotMarried",
            element: (
              <PrivateRoute>
                <GotMarried />
              </PrivateRoute>
            ),
          },
          {
            path: "myContactRequest",
            element: (
              <PrivateRoute>
                <MyContactRequest />
              </PrivateRoute>
            ),
          },
          {
            path: "myFavouritesBiodatas",
            element: (
              <PrivateRoute>
                <MyFavouritesBiodatas />
              </PrivateRoute>
            ),
          },
          // Admin user
          {
            path: "",
            element: <AdminHome />,
          },
          {
            path: "manage",
            element: <ManageUsers />,
          },
          {
            path: "approvedPremium",
            element: <ApprovedPremium />,
          },
        ],
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
      // {
      //   path: "/myBiodata",
      //   element: (
      //     <PrivateRoute>
      //       <MyBiodata />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
