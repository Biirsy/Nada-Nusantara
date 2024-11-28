export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "sm" | "md" | "lg";
  buttonRadius?: "none" | "sm" | "md" | "lg" | "full";
  onButtonClick?: () => void;
}
