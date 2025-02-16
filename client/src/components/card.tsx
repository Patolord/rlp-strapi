import { ImageProps } from "@/types";

import Link from "next/link";
import { StrapiImage } from "./strapi-image";
import { formatDate } from "@/utils/format-date";

export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  price?: number;
  startDate?: string;
  createdAt: string;
  basePath: string;
}

export function Card({
  title,
  description,
  slug,
  image,
  price,
  createdAt,
  startDate,
  basePath,
}: Readonly<CardProps>) {
  // Handle image being an array
  const imageData = Array.isArray(image) ? image[0] : image;

  if (!imageData?.url) {
    console.warn("Missing image data for card:", title);
    return null;
  }

  return (
    <Link
      href={`/${basePath}/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="relative h-[300px] w-full">
        <StrapiImage
          src={imageData.url}
          alt={imageData.alternativeText || "No alternative text provided"}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 space-y-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        {price && (
          <p className="text-gray-600">
            <span className="font-medium">Price: </span>
            {price}
          </p>
        )}
        {(startDate ?? createdAt) && (
          <p className="text-gray-500">{formatDate(startDate ?? createdAt)}</p>
        )}
        <p className="text-gray-600">{description.slice(0, 144)}...</p>
      </div>
    </Link>
  );
}
