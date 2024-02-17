export interface IBodyRequestStudentCreate {
  name: string;
  email: string;
  cpf: string;
}

export interface IParamsRequestStudentShow {
  ra: number;
}
export interface IQueryRequestStudentIndex {
  search?: string;
}
