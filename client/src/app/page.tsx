import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data };
}

export default async function Home() {
  const data = await loader();

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center 
    justify-items-center"
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
