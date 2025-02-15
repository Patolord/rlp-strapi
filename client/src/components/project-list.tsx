import { ProjectProps } from "@/types";

interface ProjectListProps {
  title: string;
  path: string;
  component: React.ComponentType<ProjectProps & { basePath: string }>;
  featured?: boolean;
}

async function loader(path: string, featured: boolean) {
  const { data, meta } = await getContent(path, featured);

  return {
    projects: (data as ProjectProps[]) || [],
  };
}

export async function ProjectList({
  title,
  path,
  component,
  featured,
}: Readonly<ProjectListProps>) {
  const { projects } = await loader(path, featured);
  const Component = component;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {projects.map((project) => (
          <Component key={project.id} {...project} basePath={path} />
        ))}
      </div>
    </div>
  );
}
