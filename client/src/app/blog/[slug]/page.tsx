import type { Block, ProjectProps } from "@/types";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/format-date";

import HeroSection from "@/components/blocks/hero-section";
import { getContentBySlug } from "@/data/loaders";
import { BlockRenderer } from "@/components/block-renderer";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/projetos");

  const project = data[0];
  if (!project) throw notFound();
  return { project: project as ProjectProps, blocks: project?.blocks };
}

interface ProjectOverviewProps {
  headline: string;
  description: string;
  tableOfContents: { heading: string; linkId: string }[];
}

function ProjectOverview({
  headline,
  description,
  tableOfContents,
}: Readonly<ProjectOverviewProps>) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold tracking-tight">{headline}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      {tableOfContents && (
        <ul className="article-overview__contents">
          {tableOfContents.map((item, index) => (
            <li key={index}>
              <Link href={`#${item.linkId}`} className="article-overview__link">
                {index + 1}. {item.heading}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function SingleBlogRoute({ params }: PageProps) {
  const slug = (await params).slug;
  const { project, blocks } = await loader(slug);
  const { title, author, publishedAt, description, image, badge } = project;

  const tableOfContents = blocks?.filter(
    (block: Block) => block.__component === "blocks.heading"
  );

  return (
    <div className="min-h-screen">
      <HeroSection
        id={project.id}
        heading={title}
        theme="orange"
        image={image}
        author={author}
        publishedAt={formatDate(publishedAt)}
        subheading={description}
        badge={badge}
      />

      <div>
        <ProjectOverview
          headline={title}
          description={description}
          tableOfContents={tableOfContents}
        />
        <BlockRenderer blocks={blocks} />
      </div>
    </div>
  );
}
