import { Like } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute(name?: string): Promise<User[]> {
    const queryBuilder = await this.usersRepository.createQueryBuilder();
    if (name) {
      queryBuilder.where({ name: Like(`%${name}%`) });
    }
    const users = await queryBuilder.addOrderBy('name', 'ASC').getMany();

    return users;
  }
}

export default ListUserService;
