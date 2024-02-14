import { AppDataSource } from '@shared/typeorm/data-source';
import ListUserService from '@modules/users/services/ListUserService';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

export default class UsersController {
  public async index() {
    const usersRepository = new UsersRepository(AppDataSource);
    const listUserService = new ListUserService(usersRepository);
    const users = await listUserService.execute();
    return users;
  }
}
