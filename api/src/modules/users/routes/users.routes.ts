import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import UsersController from '@modules/users/controllers/UsersController';

export const usersRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get('', async (request: FastifyRequest, reply: FastifyReply) => {
    const usersController = new UsersController();
    return usersController.index();
  });
};
