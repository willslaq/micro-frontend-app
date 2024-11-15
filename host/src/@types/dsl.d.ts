declare module "dsl/Button" {
  import { FC } from "react";

  interface ButtonProps {
    label: string;
  }

  const Button: FC<ButtonProps>;
  export default Button;
}
