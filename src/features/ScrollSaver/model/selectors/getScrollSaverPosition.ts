import { StateSchema } from 'app/providers';

export const getScrollPosition = (state: StateSchema) => state.scrollSaver.scroll;
