import { AxiosError } from 'axios';
import { HandleLogout } from './HandlerLogout';

export const HandlerError = (Error: AxiosError): string => {
  if (Error.response) {
    const response = Error.response.data as { message: string };
    if (response.message === 'Token inválido.') {
      HandleLogout();
      return 'Sessão expirada';
    }
    return response.message;
  }
  if (Error.request) {
    return 'Servidor indisponível';
  }
  return Error.message;
};
