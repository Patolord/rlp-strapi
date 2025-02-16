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

interface BlogPageProps {
  searchParams: Promise<{ query?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { query, page } = await searchParams;
  const { blocks } = await loader("blog");
  return (
    <div className="min-h-screen">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Veja nossos projetos"
        path="/api/projetos"
        component={BlogCard}
        headlineAlignment="center"
        showSearch
        query={query}
        showPagination
        page={page}
      />
    </div>
  );
}
