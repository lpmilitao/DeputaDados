import './eventosDeputado.style.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useListarEventos } from '../../../hooks/eventos/listarEventos.hook';
import { useAcoesEventos } from '../../../hooks/eventos/acoesEventos.hook';

import {
  BotaoAcao,
  EditarEvento,
  Header,
  Loader,
  Vazio,
} from '../../components';

export function EventosDeputado() {
  const { deputadoId } = useParams();
  const { eventos, isLoadingL, buscarPorDeputado } = useListarEventos();
  const {
    isLoadingA,
    desinscreverDeputado,
    excluir,
    editar,
    reload,
    isEditOpen,
    closeEdit,
    openEdit,
    eventoSelecionado,
    onChange,
  } = useAcoesEventos();

  useEffect(() => {
    buscarPorDeputado(deputadoId);
    console.log(eventos);
  }, [reload]);

  return !isLoadingL && !isLoadingA ? (
    <section>
      <ToastContainer />
      <Header at={'Eventos de um deputado'} voltar={true} />
      {eventos.length > 0 ? (
        <section className='lista-container eventos-deputado-container'>
          {eventos.map((evento) => {
            return (
              <div key={evento.id} className='evento-deputado'>
                <h3>{evento.nome}</h3>
                <BotaoAcao
                  acao={'desinscrever'}
                  onClick={() => desinscreverDeputado(deputadoId, evento.id)}
                />
                <BotaoAcao acao={'editar'} onClick={() => openEdit(evento)} />
                <BotaoAcao
                  acao={'excluir'}
                  onClick={() => excluir(evento.id)}
                />
              </div>
            );
          })}
          <EditarEvento
            isOpen={isEditOpen}
            onClose={closeEdit}
            evento={eventoSelecionado}
            onChange={onChange}
            send={editar}
          />
        </section>
      ) : (
        <Vazio />
      )}
    </section>
  ) : (
    <Loader />
  );
}
