import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/block-renderer";
import ProjectList from "@/components/project-list";
import { Card, CardProps } from "@/components/card";

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ProjectCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="/projects" />
);

export default async function DynamicPageRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks } = await loader(slug);
  return (
    <div className="container mx-auto px-4">
      <BlockRenderer blocks={blocks} />

      <ProjectList title="Projects" path="/projects" component={ProjectCard} />
    </div>
  );
}
