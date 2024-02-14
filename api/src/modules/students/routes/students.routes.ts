import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from 'fastify';

export const studentsRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  fastify.get('', async (request: FastifyRequest, reply: FastifyReply) => {
    return { Student: 'Studend route' };
  });
};
