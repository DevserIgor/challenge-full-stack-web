import 'reflect-metadata';
import 'dotenv/config';
import '@shared/typeorm';
import fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';
import { isAuthenticated } from './middlewares/isAuthenticated';
const app = fastify({
  logger: true,
  ajv: {
    customOptions: {
      allErrors: true,
    },
    plugins: [require('ajv-errors')],
  },
});

app.decorate('auth', isAuthenticated);

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({
    message: error.message,
  });
});

const start = async () => {
  await app.register(cors);
  await app.register(routes);
  try {
    const port = process.env.PORT || 3000;
    console.log('port1', process.env.PORT);
    await app.listen({ port: Number(port) });
    console.log('Server running on port', port);
  } catch (err) {
    process.exit(1);
  }
};

start();
