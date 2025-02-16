import { ProjectProps } from "@/types";
import { getContent } from "@/data/loaders";
import { Search } from "@/components/search";
import { PaginationComponent } from "@/components/pagination-component";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ProjectProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string
) {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    projects: (data as ProjectProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  component,
  headlineAlignment,
  featured,
  showSearch,
  query,
  showPagination,
  page,
}: Readonly<ContentListProps>) {
  const { projects, pageCount } = await loader(path, featured, query, page);
  const Component = component;
  return (
    <section className="container mx-auto px-4 py-12">
      <h3
        className={`text-3xl font-bold mb-8 text-${
          headlineAlignment ?? "left"
        }`}
      >
        {headline || "Featured Projects"}
      </h3>
      {showSearch && <Search />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Component key={project.documentId} {...project} basePath={path} />
        ))}
      </div>
      {showPagination && <PaginationComponent pageCount={pageCount} />}
    </section>
  );
}
