export const updateUserSchema = {
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
          id: 'Passa o id certo que tu vai conseguir alterar o user.',
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
            minLength: 'Mínimo 2 caractéres', // all constraints except required
          },
        },
        email: {
          type: 'string',
          format: 'email',
          errorMessage: {
            type: 'Bad Email',
            format: 'Informe um email válido.', // all constraints except required
          },
        },
        password: {
          type: 'string',
          pattern:
            '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,}$',
          errorMessage: {
            type: 'Bad Password',
            pattern:
              'A senha deve conter no mínimo 6 caracteres, incluindo letras, números e caracteres especiais.',
          },
        },
        user_admin: {
          type: 'boolean',
          errorMessage: {
            type: 'Precisa informar um valor booleano.',
          },
        },
      },
      required: ['name', 'email'],
      errorMessage: {
        required: {
          name: 'Fala teu nome tchê',
          email: 'tu deve ter um email ai, nem vem. nem que seja o antigo',
        },
      },
    },
  },
};
