import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    jwtPayload?: ITokenPayload; // Substitua `any` pelo tipo específico do seu payload, se desejado
  }
}
