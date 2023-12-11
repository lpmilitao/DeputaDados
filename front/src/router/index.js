import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../ui/screens';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
