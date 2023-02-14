import { StateSchema } from 'app/providers';

export const getProfileFormData = (state: StateSchema) => state?.profile?.form;
