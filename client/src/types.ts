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

type ComponentType =
  | "blocks.hero-section"
  | "blocks.services-section"
  | "blocks.featured-project"
  | "blocks.subscribe";

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
  | SubscribeProps;

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
