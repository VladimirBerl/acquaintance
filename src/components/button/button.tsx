import React from "react";
import cls from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button className={cls.button + " " + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
