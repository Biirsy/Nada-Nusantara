import React from "react";
import Image from "next/image";
import Button from "../button/button";
import { CardProps } from "./card.type";

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonVariant = "secondary",
  buttonSize = "sm",
  buttonRadius = "md",
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={250}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semi mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          radius={buttonRadius}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
