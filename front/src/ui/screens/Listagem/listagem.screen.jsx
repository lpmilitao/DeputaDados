import './listagem.style.css';

import { Header } from '../../components';
import { useListarDeputados } from '../../../hooks/deputados/listarDeputados.hook';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function Listagem() {
  const { deputados, isLoading, listar } = useListarDeputados();
  const navigate = useNavigate();

  useEffect(() => {
    listar();
  }, []);

  function irParaDetalhe(id) {
    navigate(`/deputado/${id}`);
  }

  return (
    <section>
      <ToastContainer />
      <Header at={'Listagem'} />
      <div className='lista-container deputado-container'>
        {!isLoading
          ? deputados.map((deputado) => {
              return (
                <div
                  className='deputado'
                  key={deputado.id}
                  onClick={() => irParaDetalhe(deputado.id)}
                >
                  <img
                    src={deputado.urlFoto}
                    alt='Foto de perfil do deputado'
                  />
                  <h3>{deputado.nome}</h3>
                  <span className='partido'>{deputado.siglaPartido}</span>
                  <span className='uf'>{deputado.siglaUf}</span>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}
