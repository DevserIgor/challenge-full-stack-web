export const createSessionsSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
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
            pattern: 'Email/Senha Inválida',
          },
        },
      },
      required: ['email', 'password'],
      errorMessage: {
        required: {
          email: 'tu deve ter um email ai, nem vem.',
          password: 'serio que tu quer criar user sem senha?',
        },
      },
    },
  },
};
