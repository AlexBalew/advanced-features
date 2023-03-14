import { StateSchema } from '@/app/providers/store-provider';

export const getScrollPosition = (state: StateSchema) => state.scrollSaver.scroll;
