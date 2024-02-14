import { authConfig } from '@config/auth';
import AppError from '@shared/errors/AppError';
import { FastifyReply, FastifyRequest } from 'fastify';

export const isAuthenticated = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token não fornecido.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const payload = await authConfig.jwt.verify(token);
    request.jwtPayload = payload;
  } catch (error) {
    throw new AppError('Token inválido.', 401);
  }
};
