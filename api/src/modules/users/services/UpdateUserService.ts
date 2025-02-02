import { hash } from 'bcryptjs';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  user_admin: boolean;
}
class UpdateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({
    id,
    name,
    email,
    password,
    user_admin,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    if (email !== user.email) {
      const userExists = await this.usersRepository.findByEmailNoId(id, email);

      if (userExists) {
        throw new AppError('Já existe um usuário com este email.');
      }
    }

    user.name = name;
    user.email = email;

    if (user_admin !== undefined && user.user_admin !== user_admin) {
      user.user_admin = user_admin;
    }

    if (password) {
      const hashedPassword = await hash(password, 8);
      user.password = hashedPassword;
    }

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
