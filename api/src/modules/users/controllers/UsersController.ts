import { AppDataSource } from '@shared/typeorm/data-source';
import ListUserService from '@modules/users/services/ListUserService';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import CreateUserService from '../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';
import {
  IBodyRequestUserCreate,
  IParamsRequestUserShow,
} from '../@types/userTypes';
import ShowUserService from '../services/ShowUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';
import AppError from '@shared/errors/AppError';

export default class UsersController {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository(AppDataSource);
  }

  public async index() {
    const listUserService = new ListUserService(this.usersRepository);
    const users = await listUserService.execute();
    return users;
  }

  public async create(
    request: FastifyRequest<{ Body: IBodyRequestUserCreate }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, user_admin } = request.body;
    console.log('request.jwtPayload', request.jwtPayload);

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const createUser = new CreateUserService(this.usersRepository);
    const user = await createUser.execute({
      name,
      email,
      password,
      user_admin: user_admin,
    });
    return reply.code(201).send({
      success: true,
      message: 'Usuário criado com sucesso',
      user: instanceToInstance(user),
    });
  }

  public async show(
    request: FastifyRequest<{ Params: IParamsRequestUserShow }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params;

    const showUserService = new ShowUserService(this.usersRepository);

    const user = await showUserService.execute({ id });
    return reply.send(instanceToInstance(user));
  }

  public async update(
    request: FastifyRequest<{
      Body: IBodyRequestUserCreate;
      Params: IParamsRequestUserShow;
    }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, password, user_admin } = request.body;
    const { id } = request.params;

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const updateUser = new UpdateUserService(this.usersRepository);
    const user = await updateUser.execute({
      id,
      name,
      email,
      password,
      user_admin: user_admin,
    });
    return reply.code(201).send({
      success: true,
      message: 'Usuário Alterado com sucesso',
      user: instanceToInstance(user),
    });
  }

  public async delete(
    request: FastifyRequest<{ Params: IParamsRequestUserShow }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { id } = request.params;

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const deleteUserService = new DeleteUserService(this.usersRepository);

    await deleteUserService.execute({ id });
    return reply.send([]);
  }
}
