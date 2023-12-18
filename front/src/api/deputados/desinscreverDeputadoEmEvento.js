import { axiosInstance } from '../base/_baseInstance';
import { URL_DEPUTADOS } from '../base/urls';

export async function desinscreverDeputadoEmEvento(deputadoId, eventoId) {
  const URL = `${URL_DEPUTADOS}/${deputadoId}/evento/${eventoId}`;

  const response = await axiosInstance.delete(URL, {}, {});
  return response.data;
}
