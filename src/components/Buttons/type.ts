

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonType = "primary" | "secondary" | "icon";

export type ButtonProps = {
  size: ButtonSize;
  type: ButtonType;
  text?: string | null;
  icon?: React.ReactNode | null;
  className?:string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  
}



