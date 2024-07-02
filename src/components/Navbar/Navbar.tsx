'use client'
import Link from 'next/link'
import React from 'react'
import { MountainIcon } from '~/components/icons'
import { DropdownMenu } from '~/components/ui'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {}

export const Navbar = (props: Props) => {
    return (
        <header className="bg-white flex h-16 items-center justify-between px-4 md:px-6 shadow dark:bg-gray-900">
            <Link href="#">
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Google Books</span>
            </Link>
            <div className="flex items-center gap-4">
                <ThemeSwitcher />
                <DropdownMenu />
            </div>
        </header>
    )
}