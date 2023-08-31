import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharityDetailsPage from './pages/CharityDetailsPage';
import FavoriteCharitiesPage from './pages/FavoriteCharitiesPage';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import axios from 'axios';

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
    element: <CharityDetailsPage />,
  },
  {
    path: '/favorites',
    element: <FavoriteCharitiesPage />,
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
