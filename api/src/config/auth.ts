import { createSigner, createVerifier } from 'fast-jwt';

const secret = process.env.APP_SECRET ? process.env.APP_SECRET : '';
export const authConfig = {
  jwt: {
    secret: secret,
    sign: createSigner({ key: secret }),
    verify: createVerifier({ key: secret }),
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour,
  },
};
