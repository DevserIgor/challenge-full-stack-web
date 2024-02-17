export const deleteStudentSchema = {
  schema: {
    params: {
      type: 'object',
      properties: {
        ra: {
          type: 'number',
          errorMessage: {
            type: 'Precisa ser um ra válido',
          },
        },
      },
      required: ['ra'],
      errorMessage: {
        required: {
          ra: 'Passa o ra certo que tu exlui o aluno direito.',
        },
      },
    },
  },
};
