import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/block-renderer";
import { Card, type CardProps } from "@/components/card";
import { ContentList } from "@/components/content-list";

async function loader(slug: string) {
  const { data } = await getPageBySlug("blog");
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const slug = (await params).slug;

  const { blocks } = await loader(slug);
  return (
    <div className="">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Veja nossos projetos"
        path="/api/projetos"
        component={Card}
      />
    </div>
  );
}
