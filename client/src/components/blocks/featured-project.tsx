import type { FeaturedProjectProps } from "@/types";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import { StrapiImage } from "../strapi-image";
import { Button } from "../ui/button";

export function FeaturedProject({
  heading,
  subheading,
  image,
  cta,
}: Readonly<FeaturedProjectProps>) {
  return (
    <article className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-bold text-gray-900">{heading}</h3>
        <ReactMarkdown className="prose text-gray-600 max-w-none">
          {subheading}
        </ReactMarkdown>
        <Button asChild>
          <Link href={cta.href}>{cta.text}</Link>
        </Button>
      </div>
      <div className="flex-1">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "No alternative text provided"}
          height={200}
          width={300}
          className="w-full h-auto rounded-[30px]"
        />
      </div>
    </article>
  );
}
