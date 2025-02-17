import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturedProject extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_projects';
  info: {
    displayName: 'Featured Project';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
  };
}

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

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph With Image';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksProjectsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_projects_sections';
  info: {
    displayName: 'Projects Section';
  };
  attributes: {
    title: Schema.Attribute.String;
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

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    description: '';
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    input: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    copy: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
    policies: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.featured-project': BlocksFeaturedProject;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.paragraph': BlocksParagraph;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.projects-section': BlocksProjectsSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.subscribe': BlocksSubscribe;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
