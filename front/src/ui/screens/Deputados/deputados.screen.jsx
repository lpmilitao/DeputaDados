import './deputados.style.css';

import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useListarDeputados } from '../../../hooks/deputados/listarDeputados.hook';

import { Header, Loader, Vazio } from '../../components';

export function Deputados() {
  const { deputados, isLoading, listar } = useListarDeputados();
  const navigate = useNavigate();

  useEffect(() => {
    listar();
  }, []);

  function irParaDetalhe(id) {
    navigate(`/deputados/${id}`);
  }

  return !isLoading ? (
    <section>
      <ToastContainer />
      <Header at={'Deputados'} voltar={true} />
      {deputados ? (
        <div className='lista-container deputado-container'>
          {deputados.map((deputado) => {
            return (
              <div
                className='deputado'
                key={deputado.id}
                onClick={() => irParaDetalhe(deputado.id)}
              >
                <img src={deputado.urlFoto} alt='Foto de perfil do deputado' />
                <h3>{deputado.nome}</h3>
                <span className='partido'>{deputado.siglaPartido}</span>
                <span className='uf'>{deputado.siglaUf}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <Vazio />
      )}
    </section>
  ) : (
    <Loader />
  );
}
