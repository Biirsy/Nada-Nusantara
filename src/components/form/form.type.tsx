export interface InputProps {
  type?: "text" | "password";
  placeholder?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: "none" | "small" | "medium" | "large" | "full";
  borderColor?: string;
  variant?: "default" | "search"; // New variant for search input
}
