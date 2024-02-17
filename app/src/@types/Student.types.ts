export type Student = {
  ra: string;
  name: string;
  email: string;
  cpf: string;
};

export type ResponseUpdateStudent = {
  message: string;
  student: Student;
  success: boolean;
};

export type ResponseCreateStudent = ResponseUpdateStudent;
