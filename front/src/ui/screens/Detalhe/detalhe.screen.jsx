import { useEffect } from 'react';
import { useDetalharDeputado } from '../../../hooks/deputados/detalharDeputado.hook';
import './detalhe.style.css';

import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '../../components';

export function Detalhe() {
  const { deputadoId } = useParams();
  const { deputado, isLoading, buscar } = useDetalharDeputado();

  useEffect(() => {
    buscar(deputadoId);
  }, []);

  return !isLoading ? (
    <>
      <ToastContainer />
      <Header at={'Detalhes do deputado'} />
      <section className='detalhe-container'>
        <img src={deputado.urlFoto} alt='Foto de perfil do deputado.' />
        <h1>{deputado.nome}</h1>
        <p>{deputado.email}</p>
        <div>
          <span className='uf'>{deputado.siglaUf}</span>
          <span>{deputado.siglaPartido}</span>
        </div>
        <button>Ver Eventos</button>
        <button className='azul'>Inscrever em evento</button>
      </section>
    </>
  ) : null;
}
