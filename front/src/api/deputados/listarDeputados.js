import { axiosInstance } from '../base/_baseInstance';
import { URL_DEPUTADOS } from '../base/urls';

export async function listarDeputados() {
  const response = await axiosInstance.get(URL_DEPUTADOS, {});
  return response.data;
}
