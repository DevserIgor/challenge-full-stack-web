import { createUserSchema } from './createUserSchema';
import { showUserSchema } from './showUserSchema';
import { deleteUserSchema } from './deleteUserSchema';
import { updateUserSchema } from './updateUserSchema';
import { createSessionsSchema } from './createSessionsSchema';

export const UserValidationSchemas = {
  createUserSchema,
  showUserSchema,
  deleteUserSchema,
  updateUserSchema,
  createSessionsSchema,
};
