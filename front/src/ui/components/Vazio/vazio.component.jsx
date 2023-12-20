import './vazio.style.css';

import vazio from '../../../assets/not-found.png';
import { useNavigate } from 'react-router-dom';

export function Vazio() {
  const navigate = useNavigate();

  return (
    <section className='vazio-container'>
      <h1>Parece que ainda não há nada por aqui...</h1>
      <img src={vazio} alt='Imagem de uma caixa aberta e vazia.' />
      <button onClick={() => navigate(-1)}>Que tal voltar?</button>
    </section>
  );
}
