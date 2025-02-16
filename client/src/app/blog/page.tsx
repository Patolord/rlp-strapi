import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/block-renderer";

import { ContentList } from "@/components/content-list";
import BlogCard from "@/components/blog-card";

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  if (data.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

export default async function BlogPage() {
  const { blocks } = await loader("blog");
  return (
    <div className="min-h-screen">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Veja nossos projetos"
        path="/api/projetos"
        component={BlogCard}
        headlineAlignment="center"
      />
    </div>
  );
}
