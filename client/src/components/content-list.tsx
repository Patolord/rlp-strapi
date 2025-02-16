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

async function loader(path: string) {
  const { data, meta } = await getContent(path);
  return {
    projetos: (data as ProjectProps[]) || [],
  };
}

export async function ContentList({
  headline,
  path,
  component,
  headlineAlignment,
}: Readonly<ContentListProps>) {
  const { projetos } = await loader(path);
  const Component = component;
  return (
    <section className="content-items container">
      <h3 className={`content-items__headline ${headlineAlignment ?? ""}`}>
        {headline || "Featured Projects"}
      </h3>
      <div className="content-items__container--card">
        {projetos.map((project) => (
          <Component key={project.documentId} {...project} basePath={path} />
        ))}
      </div>
    </section>
  );
}
