import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    headline: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.services-section': BlocksServicesSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
