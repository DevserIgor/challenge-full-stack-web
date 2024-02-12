import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { AppDataSourceinitializated } from '../../typeorm';

export const initializeDb = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  await fastify.decorate('db', AppDataSourceinitializated);
};
