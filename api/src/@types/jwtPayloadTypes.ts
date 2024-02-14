import User from '@modules/users/typeorm/entities/User';

export interface ITokenPayload {
  user: Pick<User, 'name' | 'email' | 'user_admin'>;
  exp: number;
}
