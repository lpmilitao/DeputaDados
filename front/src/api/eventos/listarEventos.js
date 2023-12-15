import { axiosInstance } from '../base/_baseInstance';
import { URL_EVENTOS } from '../base/urls';

export async function listarEventos() {
  const response = await axiosInstance.get(URL_EVENTOS, {});
  return response.data;
}
