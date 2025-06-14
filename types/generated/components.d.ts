import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitBenefit extends Struct.ComponentSchema {
  collectionName: 'components_benefit_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface FeatureFeature extends Struct.ComponentSchema {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    about_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.RichText;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    benefit: Schema.Attribute.Component<'benefit.benefit', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'cta_section';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    features: Schema.Attribute.Component<'feature.feature', true>;
    icon: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFounder extends Struct.ComponentSchema {
  collectionName: 'components_sections_founders';
  info: {
    displayName: 'founder';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    founderImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsGetInTouch extends Struct.ComponentSchema {
  collectionName: 'components_sections_get_in_touches';
  info: {
    displayName: 'get-in-touch';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'feature.feature', true>;
    cta_1: Schema.Attribute.String;
    description: Schema.Attribute.String;
    social_contacts: Schema.Attribute.Component<'feature.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    cta_1: Schema.Attribute.String;
    cta_2: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    hero_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_ctas';
  info: {
    displayName: 'hero_cta';
  };
  attributes: {
    cta_button_link: Schema.Attribute.String;
    cta_button_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProgramHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_program_heroes';
  info: {
    displayName: 'program_hero';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProgramList extends Struct.ComponentSchema {
  collectionName: 'components_sections_program_lists';
  info: {
    displayName: 'program_list';
  };
  attributes: {
    cta: Schema.Attribute.Component<'sections.hero-cta', true>;
    hero_component: Schema.Attribute.Component<'sections.program-hero', true>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
    what_we_offer: Schema.Attribute.Component<'sections.benefits', true>;
    what_you_learn: Schema.Attribute.Component<'sections.what-you-learn', true>;
  };
}

export interface SectionsServiceDetails extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_details';
  info: {
    displayName: 'service-details';
  };
  attributes: {
    services: Schema.Attribute.Component<'service.services', true>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    featureComponent: Schema.Attribute.Component<'feature.feature', true>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTraining extends Struct.ComponentSchema {
  collectionName: 'components_sections_trainings';
  info: {
    displayName: 'training';
  };
  attributes: {
    description1: Schema.Attribute.RichText;
    description2: Schema.Attribute.RichText;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.RichText;
  };
}

export interface SectionsWhatYouLearn extends Struct.ComponentSchema {
  collectionName: 'components_sections_what_you_learns';
  info: {
    displayName: 'what_you_learn';
  };
  attributes: {
    modules: Schema.Attribute.Component<'benefit.benefit', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServiceServices extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'benefit.benefit': BenefitBenefit;
      'feature.feature': FeatureFeature;
      'sections.about': SectionsAbout;
      'sections.benefits': SectionsBenefits;
      'sections.cta-section': SectionsCtaSection;
      'sections.founder': SectionsFounder;
      'sections.get-in-touch': SectionsGetInTouch;
      'sections.hero': SectionsHero;
      'sections.hero-cta': SectionsHeroCta;
      'sections.program-hero': SectionsProgramHero;
      'sections.program-list': SectionsProgramList;
      'sections.service-details': SectionsServiceDetails;
      'sections.services': SectionsServices;
      'sections.training': SectionsTraining;
      'sections.what-you-learn': SectionsWhatYouLearn;
      'service.services': ServiceServices;
    }
  }
}
