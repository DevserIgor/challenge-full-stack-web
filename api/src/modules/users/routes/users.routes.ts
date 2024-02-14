import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import UsersController from '@modules/users/controllers/UsersController';
import { UserValidationSchemas } from './validations/userValidationSchemas';

export const usersRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  const usersController = new UsersController();

  fastify.get('', usersController.index.bind(usersController));

  fastify.post(
    '',
    { ...UserValidationSchemas.createUserSchema },
    usersController.create.bind(usersController),
  );

  fastify.get(
    '/:id',
    { ...UserValidationSchemas.showUserSchema },
    usersController.show.bind(usersController),
  );

  fastify.delete(
    '/:id',
    { ...UserValidationSchemas.deleteUserSchema },
    usersController.delete.bind(usersController),
  );

  fastify.put(
    '/:id',
    { ...UserValidationSchemas.updateUserSchema },
    usersController.update.bind(usersController),
  );
};
