import { StateSchema } from 'app/providers/store-provider';

export const getProfileReadOnly = (state: StateSchema) => state?.profile?.readonly;
