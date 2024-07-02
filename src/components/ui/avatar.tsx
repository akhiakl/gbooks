import * as React from "react"

import { cn } from "~/lib/utils"

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.ButtonHTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span ref={ref}
    className={cn(
      "relative flex h-6 w-6 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}>
    {children}
  </span>
))
Avatar.displayName = 'Avatar';

export default Avatar
