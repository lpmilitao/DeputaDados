import { axiosInstance } from '../base/_baseInstance';
import { URL_EVENTOS } from '../base/urls';

export async function listarEventosPorDeputado(deputadoId) {
  const URL = `${URL_EVENTOS}/${deputadoId}`;

  const response = await axiosInstance.get(URL, {});
  return response.data;
}
