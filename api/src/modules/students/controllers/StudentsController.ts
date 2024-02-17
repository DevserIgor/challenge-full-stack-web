import { AppDataSource } from '@shared/typeorm/data-source';
import ListStudentService from '@modules/students/services/ListStudentService';
import StudentsRepository from '@modules/students/typeorm/repositories/StudentsRepository';
import { FastifyReply, FastifyRequest } from 'fastify';
import CreateStudentService from '../services/CreateStudentService';
import { instanceToInstance } from 'class-transformer';

import ShowStudentService from '../services/ShowStudentService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateStudentService from '../services/UpdateStudentService';
import AppError from '@shared/errors/AppError';
import {
  IBodyRequestStudentCreate,
  IParamsRequestStudentShow,
  IQueryRequestStudentIndex,
} from '../@types/studentTypes';

export default class StudentsController {
  private studentsRepository: StudentsRepository;

  constructor() {
    this.studentsRepository = new StudentsRepository(AppDataSource);
  }

  public async index(
    request: FastifyRequest<{ Querystring: IQueryRequestStudentIndex }>,
    reply: FastifyReply,
  ) {
    const { search } = request.query;
    const listStudentService = new ListStudentService(this.studentsRepository);
    const students = await listStudentService.execute(search);
    return reply.send(students);
  }

  public async create(
    request: FastifyRequest<{ Body: IBodyRequestStudentCreate }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, cpf } = request.body;

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const createStudent = new CreateStudentService(this.studentsRepository);
    const student = await createStudent.execute({
      name,
      email,
      cpf: cpf.replace(/\D/g, ''),
    });

    return reply.code(201).send({
      success: true,
      message: 'Aluno criado com sucesso',
      student: instanceToInstance(student),
    });
  }

  public async show(
    request: FastifyRequest<{ Params: IParamsRequestStudentShow }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { ra } = request.params;

    const showStudentService = new ShowStudentService(this.studentsRepository);

    const student = await showStudentService.execute({ ra });
    return reply.send(instanceToInstance(student));
  }

  public async update(
    request: FastifyRequest<{
      Body: IBodyRequestStudentCreate;
      Params: IParamsRequestStudentShow;
    }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email, cpf } = request.body;
    const { ra } = request.params;

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const updateStudent = new UpdateStudentService(this.studentsRepository);
    const student = await updateStudent.execute({
      ra,
      name,
      email,
      cpf: cpf.replace(/\D/g, ''),
    });

    return reply.code(201).send({
      success: true,
      message: 'Aluno Alterado com sucesso',
      student: instanceToInstance(student),
    });
  }

  public async delete(
    request: FastifyRequest<{ Params: IParamsRequestStudentShow }>,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { ra } = request.params;

    if (!request.jwtPayload.user.user_admin) {
      throw new AppError('Sem permissão.');
    }

    const deleteUserService = new DeleteUserService(this.studentsRepository);

    await deleteUserService.execute({ ra });
    return reply.send([]);
  }
}
