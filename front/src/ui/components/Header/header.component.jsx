import './header.style.css';

import logoescrita from '../../../assets/escrita.svg';

export function Header() {
  return (
    <header className='header'>
      <img
        src={logoescrita}
        alt='Logo escrita DEPUTADADOS em letras capitais amarelas'
      />
    </header>
  );
}
