import clsx from 'clsx'
import React from 'react'
import { StarIcon } from '~/components/icons'


type Props = {
    rating: number
    totalCount: number
}

const Rating = ({ rating, totalCount }: Props) => {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-0.5">
                {
                    [1, 2, 3, 4, 5].map((idx) => (
                        <StarIcon key={idx} className={clsx("w-4 h-4", `class-${idx <= rating}`, {
                            'fill-black': idx <= rating,
                            'fill-muted stroke-muted-foreground': idx > rating
                        })} />
                    ))
                }
            </div>
            <span>({totalCount ?? 0})</span>
        </div>
    )
}

export default Rating