import React from 'react'
import { searchVolumes } from '~/actions'
import BookCard from './BookCard'

type Props = {
    q?: string
}

const SearchPage = async ({ q }: Props) => {
    if (!q) return null;
    const searchResponse = await searchVolumes(q)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResponse?.items?.map(item => (<BookCard key={item.id} book={item} />))}
        </div>
    )
}

export default SearchPage