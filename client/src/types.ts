export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  logoText: string;
  image: ImageProps;
}

export interface ProjectProps {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  badge: string;
  image: ImageProps;
  author: string;
  featured: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

type ComponentType =
  | "blocks.hero-section"
  | "blocks.services-section"
  | "blocks.featured-project"
  | "blocks.subscribe"
  | "blocks.heading"
  | "blocks.paragraph-with-image"
  | "blocks.paragraph"
  | "blocks.full-image";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block =
  | HeroSectionProps
  | ServicesSectionProps
  | FeaturedProjectProps
  | SubscribeProps
  | HeadingProps
  | ParagraphWithImageProps
  | ParagraphProps
  | FullImageProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme: "turquoise" | "orange";
  heading: string;
  subheading: string;
  badge: string;
  image: ImageProps;
  cta?: LinkProps;
  author?: string;
}

export interface ServicesSectionProps extends Base<"blocks.services-section"> {
  heading: string;
}
export interface FeaturedProjectProps extends Base<"blocks.featured-project"> {
  heading: string;
  subheading: string;
  image: ImageProps;
  cta: LinkProps;
}

export interface SubscribeProps extends Base<"blocks.subscribe"> {
  heading: string;
  subheading: string;
  input: string;
  buttonText: string;
}

export interface HeadingProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

export interface ParagraphWithImageProps
  extends Base<"blocks.paragraph-with-image"> {
  content: string;
  image: ImageProps;
  reversed?: boolean;
  imageLandscape?: boolean;
}

export interface ParagraphProps extends Base<"blocks.paragraph"> {
  content: string;
}

export interface FullImageProps extends Base<"blocks.full-image"> {
  id: number;
  __component: "blocks.full-image";
  image: ImageProps;
}
