export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  className?: string;
  imageClassName?: string;
  height?: string;
}
