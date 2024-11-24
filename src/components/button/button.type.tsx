export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
