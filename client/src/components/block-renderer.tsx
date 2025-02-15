import type { Block } from "@/types";

import HeroSection from "@/components/blocks/hero-section";
import ServicesSection from "@/components/blocks/services-section";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.services-section":
      return <ServicesSection {...block} key={index} />;

    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
