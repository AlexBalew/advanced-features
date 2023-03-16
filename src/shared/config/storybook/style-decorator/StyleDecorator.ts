import { Story } from '@storybook/api';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => story();
