import { StateSchema } from 'app/providers';

export const getProfileValidationErrors = (state: StateSchema) => state?.profile?.validationError;
