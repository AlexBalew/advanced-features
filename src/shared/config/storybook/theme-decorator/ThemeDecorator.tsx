import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { Theme } from '@/shared/constants';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
