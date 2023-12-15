import { useState } from 'react';
import { toast } from 'react-toastify';

import { listarDeputados } from '../../api/deputados/listarDeputados';

export function useListarDeputados() {
  const [deputados, setDeputados] = useState([
    { id: 0, nome: '', email: '', siglaPartido: '', siglaUf: '', urlFoto: '' },
  ]);
  const [isLoading, setLoading] = useState(false);

  async function listar() {
    try {
      setLoading(true);
      const response = await listarDeputados();

      setDeputados(response);
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar os deputados.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    deputados,
    isLoading,
    listar,
  };
}
