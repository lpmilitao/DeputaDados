import { createBrowserRouter } from 'react-router-dom';
import {
  Deputados,
  Detalhe,
  Eventos,
  EventosDeputado,
  Home,
} from '../ui/screens';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/deputados',
    element: <Deputados />,
  },
  {
    path: '/deputados/:deputadoId',
    element: <Detalhe />,
  },
  {
    path: '/deputados/:deputadoId/eventos',
    element: <EventosDeputado />,
  },
  {
    path: '/eventos/:deputadoId',
    element: <Eventos />,
  },
]);
