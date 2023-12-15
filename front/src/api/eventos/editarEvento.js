import { axiosInstance } from '../base/_baseInstance';
import { URL_EVENTOS } from '../urls';

export async function editarEvento(eventoId, { nome, descricao }) {
  const URL = `${URL_EVENTOS}/${eventoId}`;

  const response = await axiosInstance.put(URL, { nome, descricao }, {});
  return response.data;
}
