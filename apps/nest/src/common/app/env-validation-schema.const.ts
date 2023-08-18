import * as Joi from 'joi';
import { IEnvSchema } from '../interfaces/IEnvSchema';

export const envValidationSchema = Joi.object<IEnvSchema>({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().min(1000).max(9999).required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_URL: Joi.string().required(),
}).options({ stripUnknown: true });
