import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}
class DeleteUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({ id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    await this.usersRepository.remove(user);
  }
}

export default DeleteUserService;
