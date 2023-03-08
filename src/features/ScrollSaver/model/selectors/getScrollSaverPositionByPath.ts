import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getScrollPosition } from './getScrollSaverPosition';

export const getScrollPositionByPath = createSelector(
    getScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
