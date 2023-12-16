import './eventosDeputado.style.css';

import { ToastContainer } from 'react-toastify';

import { BotaoAcao, Header } from '../../components';
import { useParams } from 'react-router-dom';
import { useListarEventos } from '../../../hooks/eventos/listarEventos.hook';
import { useEffect } from 'react';

export function EventosDeputado() {
  const { deputadoId } = useParams();
  const { eventos, isLoading, buscarPorDeputado, buscar } = useListarEventos();

  useEffect(() => {
    buscarPorDeputado(deputadoId);
  }, []);

  return !isLoading ? (
    <>
      <Header at={'Eventos de um deputado'} />
      <ToastContainer />
      <section className='lista-container eventos-deputado-container'>
        {eventos.map((evento) => {
          return (
            <div key={evento.id} className='evento-deputado'>
              {/* <h3>{evento.nome}</h3> */}
              <BotaoAcao acao={'excluir'} />
              <BotaoAcao acao={'editar'} />
            </div>
          );
        })}
      </section>
    </>
  ) : null;
}
