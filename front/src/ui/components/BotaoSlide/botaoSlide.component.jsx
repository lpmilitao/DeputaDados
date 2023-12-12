import { useNavigate } from 'react-router-dom';
import './botaoSlide.style.css';

export function BotaoSlide({ texto, goTo }) {
  const navigate = useNavigate();

  return (
    <button class='learn-more' onClick={() => navigate(goTo)}>
      <span class='circle' aria-hidden='true'>
        <span class='icon arrow'></span>
      </span>
      <span class='button-text'>{texto}</span>
    </button>
  );
}
