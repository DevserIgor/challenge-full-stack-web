import { useAuth } from '@/hooks/useAuth';
import { AxiosError } from 'axios';
const { logout } = useAuth();
export const HandleError = (Error: AxiosError): string => {
  if (Error.response) {
    const response = Error.response.data as { message: string };
    if (response.message === 'Token inválido.') {
      logout();
      return 'Sessão expirada';
    }
    return response.message;
  }
  if (Error.request) {
    return 'Servidor indisponível';
  }
  return Error.message;
};
