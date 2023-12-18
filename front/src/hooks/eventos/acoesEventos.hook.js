import { useState } from 'react';
import { toast } from 'react-toastify';

import { desinscreverDeputadoEmEvento } from '../../api/deputados/desinscreverDeputadoEmEvento';
import { inscreverDeputadoEmEvento } from '../../api/deputados/inscreverDeputadoEmEvento';
import { excluirEvento } from '../../api/eventos/excluirEvento';
import { editarEvento } from '../../api/eventos/editarEvento';

export function useAcoesEventos() {
  const [isLoading, setLoading] = useState(false);
  const [evento, setEvento] = useState({});
  const [isEdit, setEdit] = useState(false);
  const [reload, setReload] = useState(false);

  async function desinscreverDeputado(deputadoId, eventoId) {
    try {
      setLoading(true);
      await desinscreverDeputadoEmEvento(deputadoId, eventoId);
      toast.success('Deputado desinscrito com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setReload(!reload);
    } catch (error) {
      toast.error('Ocorreu um erro ao desinscrever o deputado do evento.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  async function inscreverDeputado(deputadoId, eventoId) {
    try {
      setLoading(true);
      await inscreverDeputadoEmEvento(deputadoId, eventoId);
      toast.success('Deputado inscrito com sucesso no evento!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setReload(!reload);
    } catch (error) {
      toast.error('Ocorreu um erro ao desinscrever o deputado do evento.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  async function excluir(eventoId) {
    try {
      setLoading(true);
      await excluirEvento(eventoId);
      toast.success('Evento excluído com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setReload(!reload);
    } catch (error) {
      toast.error('Ocorreu um erro ao excluir o evento.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  async function editar(eventoId) {
    try {
      setLoading(true);
      await editarEvento(eventoId, evento.nome);
    } catch (error) {
      toast.error('Ocorreu um erro ao editar o evento.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } finally {
      setLoading(false);
      setEdit(false);
    }
  }

  function editOn(eventore) {
    setEdit(true);
    setEvento(eventore);
  }

  function onChange(event) {
    setEvento({
      ...evento,
      [event.target.name]: event.target.value,
    });
  }

  return {
    isLoading,
    desinscreverDeputado,
    inscreverDeputado,
    excluir,
    editar,
    editOn,
    onChange,
    isEdit,
    evento,
    reload,
  };
}
