import {theme} from "../../theme/theme"
import {Props} from "./Types"

export const ChevronRightIcon = ({
  width = 24,
  height = 24,
  color = theme.colors.iconColor,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )
}
