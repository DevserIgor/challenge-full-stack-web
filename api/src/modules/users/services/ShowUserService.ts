import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}
class ShowUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({ id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    return user;
  }
}

export default ShowUserService;
