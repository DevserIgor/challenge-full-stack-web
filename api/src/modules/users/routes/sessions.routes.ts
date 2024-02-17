import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { UserValidationSchemas } from './validations/userValidationSchemas';
import SessionsController from '../controllers/SessionsController';

export const sessionsRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  const sessionsController = new SessionsController();

  fastify.post(
    '',
    { ...UserValidationSchemas.createSessionsSchema },
    sessionsController.create.bind(sessionsController),
  );
};
