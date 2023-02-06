import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers';
import { Theme } from 'shared/types';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
