import HeroSection from "@/components/blocks/hero-section";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

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
      <HeroSection {...blocks[0]} />
    </main>
  );
}
