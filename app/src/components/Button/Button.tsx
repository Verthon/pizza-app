import { theme } from "../../theme/theme";
import { Spinner } from "../icons/Spinner";
import { Styled } from "./Button.styles";
import { Props, Variant } from "./Button.types";

export const HEIGHT = Object.freeze({
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
} as const )

export const Button = ({ variant = Variant.primary, children, $loading = false, type = "submit", disabled = false, $size = "medium", outline, onClick }: Props) => {
  const setHeight = () =>  {
    const key = Object.keys(HEIGHT).some(key => key === $size) ? $size : "medium";
    
    return HEIGHT[key]
  }
  const height = setHeight();
  const spinnerColor = outline ? theme.colors.primary : theme.colors.white;
  return (
    <Styled.Button variant={variant} $loading={$loading} type={type} disabled={disabled} height={height} onClick={onClick}>
      {$loading ? <Spinner width={height - 5} height={height - 5} color={spinnerColor} /> : children}
    </Styled.Button>
  )
}