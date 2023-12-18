import './eventos.style.css';

import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { useAcoesEventos } from '../../../hooks/eventos/acoesEventos.hook';
import { useListarEventos } from '../../../hooks/eventos/listarEventos.hook';

import { BotaoAcao, Header } from '../../components';

export function Eventos() {
  const { deputadoId } = useParams();
  const { inscreverDeputado } = useAcoesEventos();
  const { eventos, isLoading, buscar } = useListarEventos();

  useEffect(() => {
    buscar();
  }, []);

  return !isLoading ? (
    <>
      <ToastContainer />
      <Header at={'Eventos'} />
      <section className='lista-container eventos-container'>
        {eventos.map((evento) => {
          return (
            <div className='evento'>
              <h3 className='esquerda'>{evento.nome}</h3>
              {evento.situacao !== 'Encerrada (Final)' ? (
                <p className='data-hora'>
                  Dia {evento.dataHoraInicio.substring(0, 10)} às{' '}
                  {evento.dataHoraInicio.substring(
                    11,
                    evento.dataHoraInicio.length
                  )}
                </p>
              ) : (
                <p className='data-hora'>
                  Dia {evento.dataHoraInicio.substring(0, 10)} às{' '}
                  {evento.dataHoraInicio.substring(
                    11,
                    evento.dataHoraInicio.length
                  )}{' '}
                  às{' '}
                  {evento.dataHoraFim.substring(11, evento.dataHoraFim.length)}
                </p>
              )}
              <p className='situacao'>{evento.situacao}</p>
              <BotaoAcao
                acao={'inscrever'}
                onClick={() => inscreverDeputado(deputadoId, evento.id)}
              />
            </div>
          );
        })}
      </section>
    </>
  ) : null;
}
