import './header.style.css';

import logo from '../../../assets/icon.svg';
import seta from '../../../assets/voltar.png';
import { useNavigate } from 'react-router-dom';

export function Header({ at, voltar }) {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <img
        src={logo}
        alt='Logo da plataforma DeputaDados, uma prancheta com algumas coisas escritas e assinadas'
      />
      <h3>{at}</h3>
      {voltar ? (
        <img
          src={seta}
          alt='Seta amarela apontando para a esquerda'
          onClick={() => navigate(-1)}
          className='direita seta'
        />
      ) : null}
    </header>
  );
}
