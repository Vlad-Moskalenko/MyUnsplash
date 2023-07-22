import { createBrowserRouter } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ImageDetailsPage from 'pages/ImageDetailsPage';
import ErrorPage from 'pages/ErrorPage';
import Layout from 'pages/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/photos/:slug',
        element: <ImageDetailsPage />,
      },
    ],
  },
]);
