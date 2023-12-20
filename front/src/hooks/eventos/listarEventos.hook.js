import { useState } from 'react';
import { toast } from 'react-toastify';
import { listarEventosPorDeputado } from '../../api/eventos/listarEventosPorDeputado';

import { listarEventos } from '../../api/eventos/listarEventos';

export function useListarEventos() {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function buscarPorDeputado(deputadoId) {
    try {
      setLoading(true);
      const response = await listarEventosPorDeputado(deputadoId);
      setEventos(response);
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar os eventos deste deputado.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  async function buscar() {
    try {
      setLoading(true);
      const response = await listarEventos();
      setEventos(response);
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar os eventos.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    eventos,
    isLoading,
    buscarPorDeputado,
    buscar,
  };
}
