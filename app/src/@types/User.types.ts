export type User = {
  name: string;
  email: string;
};

export type UserStorage = {
  token: string;
  user: User;
};
