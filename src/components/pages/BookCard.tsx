import React from 'react'
import { Button, Rating } from '../ui'
import Image from 'next/image'
import { VolumeKind } from '~/lib/books/types'
import Link from 'next/link'
import { generatePreviewUrl } from '~/lib/utils'

type Props = {
    book: VolumeKind
}

const BookCard = ({ book: { volumeInfo: bookInfo, id } }: Props) => {
    return (
        <Link href={generatePreviewUrl(id)} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center justify-between h-full">
                <div className="w-full">
                    <Image
                        quality={100}
                        alt="Harry Potter and the Sorcerer's Stone"
                        className="rounded-lg object-contain w-full"
                        height={300}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={bookInfo.imageLinks.medium ?? bookInfo.imageLinks.small ?? bookInfo.imageLinks.thumbnail}
                        style={{
                            aspectRatio: "225/300",
                        }}
                        width={225}
                    />
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {bookInfo.title}
                        </h3>
                        <Rating rating={bookInfo.averageRating} totalCount={bookInfo.averageRating} />
                        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3">{bookInfo.description}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{bookInfo.authors?.join(', ')}</p>
                    </div>
                </div>
                <div className="flex items-end gap-2 mt-4">
                    <Button size="sm" variant="outline">
                        View Book
                    </Button>
                    <Button size="sm" variant="ghost">
                        +
                        Add to Shelf
                    </Button>
                </div>
            </div>
        </Link>
    )
}

export default BookCard