import type { Block } from "@/types";

import HeroSection from "@/components/blocks/hero-section";
import ServicesSection from "@/components/blocks/services-section";
import { FeaturedProject } from "@/components/blocks/featured-project";
import { Subscribe } from "@/components/blocks/subscribe";
import { Heading } from "./blocks/heading";
import { ParagraphWithImage } from "./blocks/paragraph-with-image";
import { Paragraph } from "./blocks/paragraph";
import { FullImage } from "./blocks/full-image";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.services-section":
      return <ServicesSection {...block} key={index} />;
    case "blocks.featured-project":
      return <FeaturedProject {...block} key={index} />;
    case "blocks.subscribe":
      return <Subscribe {...block} key={index} />;
    case "blocks.heading":
      return <Heading {...block} key={index} />;
    case "blocks.paragraph-with-image":
      return <ParagraphWithImage {...block} key={index} />;
    case "blocks.paragraph":
      return <Paragraph {...block} key={index} />;
    case "blocks.full-image":
      return <FullImage {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
