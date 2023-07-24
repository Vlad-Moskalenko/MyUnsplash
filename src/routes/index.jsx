import { createBrowserRouter } from 'react-router-dom';

import { HomePage, ImageDetailsPage, ErrorPage, Layout } from 'pages';

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
      {
        path: '/:tag',
        element: <HomePage />,
      },
    ],
  },
]);
