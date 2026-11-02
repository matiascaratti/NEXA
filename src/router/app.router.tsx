import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { ProductPage } from '../pages/product/product';
import { CategoryPage } from '../pages/category/category';
import { Navbar } from '../shared/components/Navbar/Navbar';

export const appRouter = createBrowserRouter([
  {
    element: <><Navbar /><Outlet /></>,
    children: [
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
      },
      {
        path: '/categorias/:categorySlug',
        element: <CategoryPage />,
      },
    ],
  }
]);