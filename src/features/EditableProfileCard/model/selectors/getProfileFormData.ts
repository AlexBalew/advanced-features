import { StateSchema } from '@/app/providers/store-provider';

export const getProfileFormData = (state: StateSchema) => state?.profile?.form;
