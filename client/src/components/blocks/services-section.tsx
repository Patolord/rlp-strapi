import { ServicesSectionProps } from "@/types";

export default function ServicesSection({
  heading,
}: Readonly<ServicesSectionProps>) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-gray-900 mb-6">{heading}</h2>
      </div>
    </section>
  );
}
