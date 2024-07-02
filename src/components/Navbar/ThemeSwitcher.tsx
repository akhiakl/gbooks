import React, { useEffect } from 'react'
import { MoonIcon, SunIcon } from '../icons'
import { useTernaryDarkMode } from 'usehooks-ts'
import { Button } from '../ui'

const ThemeSwitcher = () => {

    const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode({
        defaultValue: 'light',
        localStorageKey: 'app-theme'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', ternaryDarkMode)
    }, [ternaryDarkMode])

    return (
        <Button variant="ghost" onClick={() => setTernaryDarkMode((mode) => mode === 'light' ? 'dark' : 'light')} className="cursor-pointer rounded-full aspect-square hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center items-center p-1">
            {
                isDarkMode
                    ? <MoonIcon className='text-white' />
                    : <SunIcon />
            }
        </Button>
    )
}

export default ThemeSwitcher