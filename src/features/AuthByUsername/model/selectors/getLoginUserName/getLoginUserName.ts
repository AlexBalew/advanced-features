import { StateSchema } from 'app/providers/store-provider';

export const getLoginUserName = (state: StateSchema) => state.loginForm?.userName || '';
