import { instanceToInstance } from 'class-transformer';
import { FastifyRequest, FastifyReply } from 'fastify';

export default class StudentsController {
  public async index(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<Response> {
    // const { name } = request.query;
    const listStudents = new ListStudentsService();

    const students = await listStudents.execute();

    return reply.send(instanceToInstance(students));
  }
}
