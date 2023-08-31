import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharityDetailsPage from './pages/CharityDetailsPage';
import FavoriteCharitiesPage from './pages/FavoriteCharitiesPage';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
