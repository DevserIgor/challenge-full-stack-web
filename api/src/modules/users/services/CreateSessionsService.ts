import { compare } from 'bcryptjs';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { authConfig } from '@config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário não encontrado.', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Email/senha errado.', 401);
    }

    const userResponse = {
      name: user.name,
      email: user.email,
      user_admin: user.user_admin,
    };

    const payload = {
      user: userResponse,
      exp: authConfig.jwt.expiresIn,
    };
    const token = authConfig.jwt.sign(payload);

    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
