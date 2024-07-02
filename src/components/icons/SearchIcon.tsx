import BaseIcon, { IconProps } from "./BaseIcon"

const SearchIcon = (props: IconProps) => (
    <BaseIcon {...props}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </BaseIcon>
)

export default SearchIcon
