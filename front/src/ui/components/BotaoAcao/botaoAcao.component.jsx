import './botaoAcao.style.css';

export function BotaoAcao({ acao, onClick }) {
  return (
    <button className={`noselect botaoAcao-${acao}`} onClick={onClick}>
      <span className='text'>{acao}</span>
      <span className='icon'>
        {acao === 'inscrever' || acao === 'editar' ? (
          <svg
            className='css-i6dzq1'
            height='24'
            width='24'
            viewBox='0 0 24 24'
          >
            <path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'></path>
          </svg>
        ) : acao === 'excluir' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'></path>
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'></path>
          </svg>
        )}
      </span>
    </button>
  );
}
