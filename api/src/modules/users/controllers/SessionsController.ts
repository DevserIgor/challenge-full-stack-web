import { AppDataSource } from '@shared/typeorm/data-source';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

import { instanceToInstance } from 'class-transformer';
import { IBodyRequestUserCreate } from '../@types/userTypes';

import CreateSessionsService from '../services/CreateSessionsService';

import { FastifyReply, FastifyRequest } from 'fastify';

export default class SessionsController {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository(AppDataSource);
  }

  public async create(
    request: FastifyRequest<{ Body: IBodyRequestUserCreate }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { email, password } = request.body;

    const createSessions = new CreateSessionsService(this.usersRepository);
    const session = await createSessions.execute({
      email,
      password,
    });

    return reply.send(instanceToInstance(session));
  }
}
