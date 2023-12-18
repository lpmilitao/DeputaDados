import { axiosInstance } from '../base/_baseInstance';
import { URL_EVENTOS } from '../base/urls';

export async function editarEvento(eventoId, nome) {
  const URL = `${URL_EVENTOS}/${eventoId}`;

  const response = await axiosInstance.put(URL, { nome }, {});
  return response.data;
}
