import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/block-renderer";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data };
}

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
