import { Student } from '@/@types/Student.types';
import { api } from './api';
import { HandleError } from './HandleError.service';
import { AxiosError } from 'axios';
interface studentResponseApi {
  ra: number;
  cpf: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

type studentParsed = Omit<studentResponseApi, 'created_at' | 'updated_at'>;

export const getStudenByRA = async (ra: string): Promise<studentParsed> => {
  try {
    const response = await api.get(`/students/${ra}`);
    const student = await response.data;
    return student as studentParsed;
  } catch (error) {
    throw new Error(HandleError(error as AxiosError));
  }
};

export const UpdateStudent = async <TResponse>(
  student: Student
): Promise<TResponse> => {
  const { ra } = student;
  try {
    const res = await api.put(`/students/${ra}`, student);
    return res.data as TResponse;
  } catch (error) {
    throw new Error(HandleError(error as AxiosError));
  }
};

export const CreateStudent = async <TResponse>(
  student: Student
): Promise<TResponse> => {
  try {
    const res = await api.post(`/students`, student);
    return res.data as TResponse;
  } catch (error) {
    throw new Error(HandleError(error as AxiosError));
  }
};

export const DeletStudent = async (ra: Student['ra']): Promise<void> => {
  try {
    await api.delete(`/students/${ra}`);
  } catch (error) {
    throw new Error(HandleError(error as AxiosError));
  }
};
