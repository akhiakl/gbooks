import BaseIcon, { IconProps } from "./BaseIcon"

const UserIcon = (props: IconProps) => (
  <BaseIcon {...props}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="-3 -3 30 30"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </BaseIcon>
)
export default UserIcon
