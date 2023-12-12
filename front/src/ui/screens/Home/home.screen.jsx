import './home.style.css';

import { BotaoSlide, Header } from '../../components';

import logoescrita from '../../../assets/escrita.svg';

export function Home() {
  return (
    <section className='home'>
      <div>
        <p>Seja bem-vindo ao</p>
        <img src={logoescrita} alt='Logo escrita do site DeputaDados' />
        <p>
          Trazemos para você, de forma centralizada, todas as informações
          necessárias sobre os deputados brasileiros e seus eventos.
        </p>
        <BotaoSlide texto={'Experimente'} />
      </div>
    </section>
  );
}
