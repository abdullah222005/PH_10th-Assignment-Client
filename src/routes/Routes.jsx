import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import AllBooks from '../pages/All Books/AllBooks';
import LoginPage from '../pages/Login Page/LoginPage';
import RegisterPage from '../pages/Register Page/RegisterPage.jsx';
import AddBook from '../pages/Add Book/AddBook.jsx';
import MyBooks from '../pages/My Books/MyBooks.jsx';
import BookDetails from '../pages/Book Details/BookDetails.jsx';
import AboutUs from '../pages/About Us/AboutUs.jsx';
import PrivateRoute from './PrivateRoute.jsx';



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
        path: "/add-book",
        element: <PrivateRoute>
          <AddBook></AddBook>
        </PrivateRoute>,
      },
      {
        path: "/myBooks",
        element: <PrivateRoute>
          <MyBooks></MyBooks>
        </PrivateRoute>,
      },
      {
        path: "/book-details/:id",
        element: <PrivateRoute>
          <BookDetails></BookDetails>
        </PrivateRoute>,
      },
      {
        path: '/aboutUs',
        Component: AboutUs
      }
    ],
  },
]);
