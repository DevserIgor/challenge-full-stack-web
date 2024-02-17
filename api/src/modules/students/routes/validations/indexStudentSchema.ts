export const indexStudentSchema = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        search: {
          type: 'string',
          errorMessage: {
            type: 'Precisa ser um ra válido',
          },
        },
      },
    },
  },
};
