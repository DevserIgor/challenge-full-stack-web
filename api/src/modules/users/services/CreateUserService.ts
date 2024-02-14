import { hash } from 'bcryptjs';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const emailExistis = await this.usersRepository.findByEmail(email);

    if (emailExistis) {
      throw new AppError('Endereço de email, já está em uso.');
    }

    const hashedPassword = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
