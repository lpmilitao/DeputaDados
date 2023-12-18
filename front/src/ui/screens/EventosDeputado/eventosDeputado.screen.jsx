import './eventosDeputado.style.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useListarEventos } from '../../../hooks/eventos/listarEventos.hook';
import { useAcoesEventos } from '../../../hooks/eventos/acoesEventos.hook';

import { BotaoAcao, Header } from '../../components';

export function EventosDeputado() {
  const { deputadoId } = useParams();
  const { eventos, isLoadingL, buscarPorDeputado, buscar } = useListarEventos();
  const { isLoadingA, desinscreverDeputado, excluir, reload } =
    useAcoesEventos();

  useEffect(() => {
    buscarPorDeputado(deputadoId);
  }, [reload]);

  return !isLoadingL || !isLoadingA ? (
    <>
      <Header at={'Eventos de um deputado'} />
      <ToastContainer />
      <section className='lista-container eventos-deputado-container'>
        {eventos.map((evento) => {
          return (
            <div key={evento.id} className='evento-deputado'>
              <h3>{evento.nome}</h3>
              <BotaoAcao
                acao={'desinscrever'}
                onClick={() => desinscreverDeputado(deputadoId, evento.id)}
              />
              <BotaoAcao acao={'excluir'} onClick={() => excluir(evento.id)} />
            </div>
          );
        })}
      </section>
    </>
  ) : null;
}
