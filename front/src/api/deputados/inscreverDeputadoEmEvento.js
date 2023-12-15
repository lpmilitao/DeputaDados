import { axiosInstance } from '../base/_baseInstance';
import { URL_DEPUTADOS } from '../base/urls';

export async function inscreverDeputadoEmEvento(deputadoId, eventoId) {
  const URL = `${URL_DEPUTADOS}/${deputadoId}/evento/${eventoId}`;

  const response = await axiosInstance.put(URL, {}, {});
  return response.data;
}
