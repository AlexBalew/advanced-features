import { StateSchema } from '@/app/providers/store-provider';

export const getUserIsMounted = (state: StateSchema) => state.user._isMounted;
