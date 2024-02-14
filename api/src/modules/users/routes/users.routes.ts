import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import UsersController from '@modules/users/controllers/UsersController';
import { UserValidationSchemas } from './validations/userValidationSchemas';
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated';

export const usersRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  const usersController = new UsersController();

  fastify
    .addHook('preHandler', isAuthenticated)
    .get('', usersController.index.bind(usersController));

  fastify
    .addHook('preHandler', isAuthenticated)
    .post(
      '',
      { ...UserValidationSchemas.createUserSchema },
      usersController.create.bind(usersController),
    );

  fastify
    .addHook('preHandler', isAuthenticated)
    .get(
      '/:id',
      { ...UserValidationSchemas.showUserSchema },
      usersController.show.bind(usersController),
    );

  fastify.addHook('preHandler', isAuthenticated).delete(
    '/:id',
    {
      ...UserValidationSchemas.deleteUserSchema,
    },
    usersController.delete.bind(usersController),
  );

  fastify
    .addHook('preHandler', isAuthenticated)
    .put(
      '/:id',
      { ...UserValidationSchemas.updateUserSchema },
      usersController.update.bind(usersController),
    );
};
