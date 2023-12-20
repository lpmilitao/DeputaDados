import './editarEvento.style.css';

export function EditarEvento({ isOpen, onClose, evento, onChange, send }) {
  return isOpen ? (
    <dialog open={isOpen} className='editar-evento-container'>
      <div className='form'>
        <button onClick={onClose} className='fechar'>
          <span className='X'></span>
          <span className='Y'></span>
        </button>
        <h1>Editar evento</h1>
        <div>
          <label for='nome' class='text'>
            Nome do evento:
          </label>
          <input
            type='text'
            name='nome'
            value={evento.nome}
            onChange={onChange}
            className='input'
          />
        </div>
        <div>
          <label for='descricao' class='text'>
            Descrição do evento:
          </label>
          <textarea
            name='descricao'
            value={evento.descricao}
            onChange={onChange}
            className='input'
          />
        </div>

        <button onClick={send} className='editar'>
          Editar
        </button>
      </div>
    </dialog>
  ) : null;
}
