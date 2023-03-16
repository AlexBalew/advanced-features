import { Story } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
// eslint-disable-next-line balev-fsd-path-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme-provider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
