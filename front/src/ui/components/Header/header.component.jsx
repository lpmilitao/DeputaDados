import './header.style.css';

import logo from '../../../assets/icon.svg';

export function Header({ at }) {
  return (
    <header className='header'>
      <img
        src={logo}
        alt='Logo da plataforma DeputaDados, uma prancheta com algumas coisas escritas e assinadas'
      />
      <h3>{at}</h3>
    </header>
  );
}
