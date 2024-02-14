export const showUserSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          format: 'uuid',
          errorMessage: {
            format: 'Precisa ser um id válido',
          },
        },
      },
      required: ['id'],
      errorMessage: {
        required: {
          id: 'Passa o id certo que tu vê o user.',
        },
      },
    },
  },
};
