import React from "react";
import Image from "next/image";
import Button from "../button/button";
import { ArticleProps } from "./articleCard.type";

const ArticleCard: React.FC<ArticleProps> = ({
  id,
  title,
  writer,
  readTime,
  imageUrl,
  imageAlt,
  buttonText,
  buttonVariant = "primary",
  buttonSize = "md",
  buttonRadius = "md",
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={250}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semi text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <span>By {writer}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <span>{readTime} min read</span>
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
    </div>
  );
};

export default ArticleCard;
