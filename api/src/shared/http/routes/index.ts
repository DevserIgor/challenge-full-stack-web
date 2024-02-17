import { studentsRoutes } from '@modules/students/routes/students.routes';
import { sessionsRoutes } from '@modules/users/routes/sessions.routes';
import { usersRoutes } from '@modules/users/routes/users.routes';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  await fastify.register(studentsRoutes, { prefix: '/students' });
  await fastify.register(usersRoutes, { prefix: '/users' });
  await fastify.register(sessionsRoutes, { prefix: '/sessions' });
};
