import React from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled,
  className = "",
  ...rest
}) => {
  const classes = [
    "spm-btn",
    `spm-btn--${variant}`,
    `spm-btn--${size}`,
    fullWidth ? "spm-btn--full-width" : "",
    isLoading ? "spm-btn--loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...rest}
    >
      {leftIcon && (
        <span className="spm-btn__icon spm-btn__icon--left">{leftIcon}</span>
      )}
      <span className="spm-btn__label">{children}</span>
      {rightIcon && (
        <span className="spm-btn__icon spm-btn__icon--right">{rightIcon}</span>
      )}
      {isLoading && <span className="spm-btn__spinner" aria-hidden="true" />}
    </button>
  );
};

