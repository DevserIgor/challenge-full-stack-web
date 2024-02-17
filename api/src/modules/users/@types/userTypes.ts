export interface IBodyRequestUserCreate {
  name: string;
  email: string;
  password: string;
  user_admin: boolean;
}

export interface IParamsRequestUserShow {
  id: string;
}
