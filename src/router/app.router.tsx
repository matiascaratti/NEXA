import { createBrowserRouter, Navigate } from 'react-router';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <div>Home Page</div>,
  }
]);