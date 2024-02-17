import { User } from '@/@types/User.types';
import { api } from '@/service/api';
import { HandleError } from './HandleError.service';
import { AxiosError } from 'axios';

export const SessionLogin = async <TResponse>(
  student: User
): Promise<TResponse> => {
  try {
    const res = await api.post(`/sessions`, student);
    return res.data as TResponse;
  } catch (error) {
    throw new Error(HandleError(error as AxiosError));
  }
};
