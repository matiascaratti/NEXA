import { createBrowserRouter, Navigate } from 'react-router';
import { ProductPage } from '../pages/product/product';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <div>Home Page</div>,
  },
  {
    path: '/products/:idSlug',
    element: <ProductPage />,
  }
]);