import { useState } from 'react';
import { detalharDeputado } from '../../api/deputados/detalharDeputado';
import { toast } from 'react-toastify';

export function useDetalharDeputado() {
  const [deputado, setDeputado] = useState({
    id: 0,
    nome: '',
    email: '',
    siglaPartido: '',
    siglaUf: '',
    urlFoto: '',
  });
  const [isLoading, setLoading] = useState(false);

  async function buscar(deputadoId) {
    try {
      setLoading(true);
      const response = await detalharDeputado(deputadoId);

      setDeputado(response);
    } catch (error) {
      toast.error('Ocorreu um erro ao buscar os detalhes do deputado.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    deputado,
    isLoading,
    buscar,
  };
}
