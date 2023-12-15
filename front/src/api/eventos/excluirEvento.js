import { axiosInstance } from '../base/_baseInstance';
import { URL_EVENTOS } from '../base/urls';

export async function excluirEvento(eventoId) {
  const URL = `${URL_EVENTOS}/${eventoId}`;

  const response = await axiosInstance.delete(URL, {});
  return response.data;
}
