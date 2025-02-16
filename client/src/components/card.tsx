import { ImageProps } from "@/types";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";
import { StrapiImage } from "./strapi-image";

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
  return (
    <Link
      href={`/${basePath}/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          width={400}
          height={400}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2 p-6">
        <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
        {price && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Price: </span>
            {price}
          </p>
        )}
        {(startDate ?? createdAt) && (
          <p className="text-sm text-gray-500">
            {formatDate(startDate ?? createdAt)}
          </p>
        )}
        <p className="text-gray-600 line-clamp-3">
          {description.slice(0, 144)}...
        </p>
      </div>
    </Link>
  );
}
