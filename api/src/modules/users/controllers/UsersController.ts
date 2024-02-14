import { AppDataSource } from '@shared/typeorm/data-source';
import ListUserService from '@modules/users/services/ListUserService';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import CreateUserService from '../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';
import { IBodyRequestUserCreate } from '../@types/userTypes';

export default class UsersController {
  public async index() {
    const usersRepository = new UsersRepository(AppDataSource);
    const listUserService = new ListUserService(usersRepository);
    const users = await listUserService.execute();
    return users;
  }

  public async create(
    request: FastifyRequest<{ Body: IBodyRequestUserCreate }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository(AppDataSource);
    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({ name, email, password });
    return reply.code(201).send({
      success: true,
      message: 'Usuário criado com sucesso',
      user: instanceToInstance(user),
    });
  }
}
