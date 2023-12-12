import './botaoSlide.style.css';

export function BotaoSlide({ texto }) {
  return (
    <button class='learn-more'>
      <span class='circle' aria-hidden='true'>
        <span class='icon arrow'></span>
      </span>
      <span class='button-text'>{texto}</span>
    </button>
  );
}
