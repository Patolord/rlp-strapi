import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/block-renderer";

async function loader(slug: string) {
  const { data } = await getPageBySlug("projects");
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const slug = (await params).slug;
  const { blocks } = await loader(slug);
  return <BlockRenderer blocks={blocks} />;
}
