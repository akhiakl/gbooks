import React, { forwardRef } from 'react'
import { cn } from '~/lib/utils'

export type IconProps = React.SVGProps<SVGSVGElement>

const BaseIcon = forwardRef<SVGSVGElement, IconProps>(({ className, children, ...props }, ref) => {
    return (
        <svg
            ref={ref}
            className={cn('text-gray-900 dark:text-gray-50', className)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            {children}
        </svg>
    )
})

BaseIcon.displayName = 'BaseIcon'

export default BaseIcon