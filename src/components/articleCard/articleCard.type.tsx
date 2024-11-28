export interface ArticleProps {
  id: string;
  title: string;
  writer: string;
  readTime: number;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "sm" | "md" | "lg";
  buttonRadius?: "none" | "sm" | "md" | "lg" | "full";
  onButtonClick?: () => void;
}
