import { studentsRoutes } from '@modules/students/routes/students.routes';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  await fastify.register(studentsRoutes, { prefix: '/students' });
};
