export const updateStudentSchema = {
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
          ra: 'Passa o ra certo que tu vai conseguir alterar o aluno.',
        },
      },
    },
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          minLength: 3,
          errorMessage: {
            type: 'Bad Name',
            minLength: 'Mínimo 2 caractéres',
          },
        },
        email: {
          type: 'string',
          format: 'email',
          errorMessage: {
            type: 'Bad Email',
            format: 'Informe um email válido.',
          },
        },
        cpf: {
          type: 'string',
          pattern: '^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$',
          errorMessage: {
            type: 'Bad Password',
            pattern: 'Informe um CPF válido.',
          },
        },
      },
      required: ['name', 'email', 'cpf'],
      errorMessage: {
        required: {
          name: 'Fala teu nome tchê',
          email: 'tu deve ter um email ai, nem vem. nem que seja o antigo',
          cpf: 'preciso do cpf também né.',
        },
      },
    },
  },
};
