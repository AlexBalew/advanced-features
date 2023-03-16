// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
