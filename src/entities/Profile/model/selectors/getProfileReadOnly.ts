import { StateSchema } from 'app/providers';

export const getProfileReadOnly = (state: StateSchema) => state?.profile?.readonly;
