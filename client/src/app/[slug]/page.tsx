interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const slug = (await params).slug;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
