import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import StudentsController from '@modules/students/controllers/StudentsController';

import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated';
import { StudentValidationSchemas } from './validations/studentValidationSchemas';

export const studentsRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  const studentsController = new StudentsController();

  fastify
    .addHook('preHandler', isAuthenticated)
    .get('', studentsController.index.bind(studentsController));

  fastify
    .addHook('preHandler', isAuthenticated)
    .post(
      '',
      { ...StudentValidationSchemas.createStudentSchema },
      studentsController.create.bind(studentsController),
    );

  fastify
    .addHook('preHandler', isAuthenticated)
    .get(
      '/:ra',
      { ...StudentValidationSchemas.showStudentSchema },
      studentsController.show.bind(studentsController),
    );

  fastify.addHook('preHandler', isAuthenticated).delete(
    '/:ra',
    {
      ...StudentValidationSchemas.deleteStudentSchema,
    },
    studentsController.delete.bind(studentsController),
  );

  fastify
    .addHook('preHandler', isAuthenticated)
    .put(
      '/:ra',
      { ...StudentValidationSchemas.updateStudentSchema },
      studentsController.update.bind(studentsController),
    );
};
