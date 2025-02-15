import { HeroSectionProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  heading,
  subheading,
  badge,
  image,
  cta,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              {badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">
              {heading}
            </h1>
            <p className="text-xl font-sans text-gray-600 mb-8">{subheading}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={cta?.href ?? ""}
                className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
              >
                {cta?.text}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={image.url}
              width={800}
              height={600}
              alt={image.alternativeText}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
