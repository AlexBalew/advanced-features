import { StateSchema } from '@/app/providers/store-provider';

export const getProfileValidationErrors = (state: StateSchema) => state?.profile?.validationError;
