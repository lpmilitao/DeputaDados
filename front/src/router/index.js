import { createBrowserRouter } from 'react-router-dom';
import { Home, Listagem } from '../ui/screens';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/listagem',
    element: <Listagem />,
  },
]);
