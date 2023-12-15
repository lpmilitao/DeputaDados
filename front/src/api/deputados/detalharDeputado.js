import { axiosInstance } from '../base/_baseInstance';
import { URL_DEPUTADOS } from '../base/urls';

export async function detalharDeputado(deputadoId) {
  const URL = `${URL_DEPUTADOS}/${deputadoId}`;

  const response = await axiosInstance.get(URL, {});
  return response.data;
}
