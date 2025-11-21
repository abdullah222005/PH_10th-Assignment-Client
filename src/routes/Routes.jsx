import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import AllBooks from '../pages/All Books/AllBooks';
import LoginPage from '../pages/Login Page/LoginPage';
import RegisterPage from '../pages/Register Page/RegisterPage.jsx';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/auth/Login",
        Component: LoginPage,
      },
      {
        path: "/auth/Register",
        Component: RegisterPage,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
    ],
  },
]);
