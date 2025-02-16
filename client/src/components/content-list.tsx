import { ProjectProps } from "@/types";
import { getContent } from "@/data/loaders";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  component: React.ComponentType<ProjectProps & { basePath: string }>;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string, featured?: boolean) {
  const { data, meta } = await getContent(path, featured);
  return {
    projects: (data as ProjectProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  component,
  headlineAlignment,
  featured,
}: Readonly<ContentListProps>) {
  const { projects } = await loader(path, featured);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Component key={project.documentId} {...project} basePath={path} />
        ))}
      </div>
    </section>
  );
}
