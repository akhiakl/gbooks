'use client'
import React, { PropsWithChildren, createContext, useContext, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

export interface UseThemeProps {
    setTheme: (newTheme: UseThemeProps['theme']) => void
    theme: 'light' | 'dark'
}

const ThemeContext = createContext<UseThemeProps | undefined>(undefined)
const defaultContext: UseThemeProps = { setTheme: _ => { }, theme: 'light' }

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, _setTheme] = useLocalStorage<UseThemeProps['theme']>('x-app-theme', 'light')
    const setTheme = (newTheme: UseThemeProps['theme']) => {
        _setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{
            theme, setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext) ?? defaultContext
