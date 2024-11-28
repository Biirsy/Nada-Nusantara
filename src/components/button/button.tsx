import React from "react";
import { ButtonProps } from "./button.type";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  radius = "md",
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "font-medium transition-colors duration-200 focus:outline-none";

  const variantStyles = {
    primary:
      "transition ease-in-out delay-50 bg-[#E48F45] hover:bg-[#C46E32] text-white",
    secondary:
      "transition ease-in-out delay-50 bg-gray-600 hover:bg-gray-700 text-white",
    danger:
      "transition ease-in-out delay-50 bg-red-600 hover:bg-red-700 text-white",
    success:
      "transition ease-in-out delay-50 bg-green-600 hover:bg-green-700 text-white",
    warning:
      "transition ease-in-out delay-50 bg-yellow-600 hover:bg-yellow-700 text-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    radiusStyles[radius],
    disabledStyles,
    className,
  ].join(" ");

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
