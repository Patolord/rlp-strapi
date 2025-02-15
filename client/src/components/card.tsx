import { ImageProps } from "@/types";
import { StrapiImage } from "./strapi-image";

export interface CardProps {
  title: string;
  description: string;
  image: ImageProps;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText}
        width={200}
        height={200}
      />
    </div>
  );
}
