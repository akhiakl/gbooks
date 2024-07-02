'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SearchIcon } from '~/components/icons'
import { Input } from '~/components/ui'

type Props = {}

export const BookSearch = (props: Props) => {
    const router = useRouter()
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget);
            router.push(`/search?q=${data.get('search')}`)
        }} className="w-full max-w-md" >
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                    name="search"
                    type="text"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-gray-900 dark:focus:ring-offset-gray-900 dark:border-gray-800 dark:focus:border-gray-50 dark:focus:ring-gray-50 dark:dark:focus:border-gray-50"
                    placeholder="Search Google Books..."
                />
            </div>
        </form>
    )
}