import { createBrowserRouter } from 'react-router-dom';
import { Detalhe, Home, Listagem } from '../ui/screens';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/listagem',
    element: <Listagem />,
  },
  {
    path: '/deputado/:deputadoId',
    element: <Detalhe />,
  },
]);
