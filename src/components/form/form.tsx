import React from "react";
import { InputProps } from "./form.type";

/**
 * Input Component
 *
 * @param {InputProps} props - Properties for customizing the input.
 * @returns {JSX.Element} - Rendered input field.
 */
export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Search here...",
  size = "medium",
  borderRadius = "medium",
  borderColor = "border-gray-300",
  variant = "default",
}) => {
  // Mapping predefined borderRadius values to TailwindCSS classes
  const borderRadiusClass = {
    none: "rounded-none",
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
  };

  const sizeClass = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 pl-8 pr-3 text-base", // Adjusted padding for search
    large: "py-3 pl-10 pr-4 text-lg", // Adjusted padding for search
  };

  return (
    <div className="relative w-full">
      {variant === "search" && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="gray"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border ${borderColor} ${borderRadiusClass[borderRadius]} ${sizeClass[size]} focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300`}
      />
    </div>
  );
};

export default Input;
