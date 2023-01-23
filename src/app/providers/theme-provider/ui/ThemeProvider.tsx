import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants'
import { Theme } from 'shared/types'
import { ThemeContext } from '../hooks'

const ThemeProvider: FC = ({ children }) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider