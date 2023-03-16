import { createSelector } from '@reduxjs/toolkit';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { StateSchema } from '@/app/providers/store-provider';
import { UserRoles } from '../constants';

export const getUserRoles = (
    state: StateSchema,
): UserRoles[] | undefined => state.user.authData?.roles;

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRoles.ADMIN)),
);

export const isUserManager = createSelector(
    getUserRoles,
    (roles) => Boolean(roles?.includes(UserRoles.MANAGER)),
);
