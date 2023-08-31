import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { Layout } from './components';
import {
  CharityDetailsPage,
  FavoriteCharitiesPage,
  HomePage,
  NotFoundPage,
} from './pages';

axios.defaults.baseURL = 'https://partners.every.org/v0.2';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/charity/:id',
    element: (
      <Layout>
        <CharityDetailsPage />
      </Layout>
    ),
  },
  {
    path: '/favorites',
    element: (
      <Layout>
        <FavoriteCharitiesPage />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
