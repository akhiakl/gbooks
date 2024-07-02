import BaseIcon, { IconProps } from "./BaseIcon"

const MountainIcon = ({ className, ...props }: IconProps) => (
    <BaseIcon {...props}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </BaseIcon>
)

export default MountainIcon