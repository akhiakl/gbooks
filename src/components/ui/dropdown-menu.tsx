import React from 'react'
import Avatar from './avatar'
import { UserIcon } from '../icons'

type Props = {}

const DropdownMenu = (props: Props) => {
  return (
    <div className="relative inline-block text-left">
      <input id="dropdown-check" type="checkbox" className="peer" hidden />
      <label htmlFor="dropdown-check" className="cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-center items-center p-1 z-10" >
        <Avatar>
          <UserIcon />
        </Avatar>
      </label>
      <div className="absolute right-0 z-10 mt-2 origin-top-right invisible peer-checked:visible min-w-[8rem] bg-white dark:bg-gray-800 dark:text-white overflow-hidden rounded-md border p-1 shadow-md animate-in fade-in-20"
        data-id="14" tabIndex={-1} >
        <div className="px-2 py-1.5 text-sm font-semibold" data-id="15">John Doe</div>
        <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-muted" data-id="16"></div>
        <div role="menuitem"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          data-id="17" tabIndex={-1}>My Account</div>
        <div role="menuitem"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          data-id="18" tabIndex={-1}>Settings</div>
        <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-muted" data-id="19"></div>
        <div role="menuitem"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          data-id="20" tabIndex={-1}>Logout</div>
      </div>
    </div>
  )
}
export default DropdownMenu