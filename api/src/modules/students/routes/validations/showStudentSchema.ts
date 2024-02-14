export const showStudentSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        ra: {
          type: 'string',
          errorMessage: {
            type: 'Precisa ser um ra válido',
          },
        },
      },
      required: ['ra'],
      errorMessage: {
        required: {
          ra: 'Passa o ra certo que tu vê o user.',
        },
      },
    },
  },
};
