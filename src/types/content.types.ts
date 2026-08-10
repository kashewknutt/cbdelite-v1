export interface NavItem {
  label: string;
  href: string;
}

export interface LeoPillarItem {
  key: 'leadership' | 'experience' | 'opportunity';
  title: string;
  description: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  numericTarget: number | null;
  suffix: string;
}

export interface PillarOfImpact {
  title: string;
  description: string;
  icon: 'child' | 'paw' | 'compass' | 'hands';
}

export interface LeadershipMember {
  name: string;
  position: string;
  order: number;
  photo: string;
  quote?: string;
}

export type GalleryCategory =
  | 'service-welfare'
  | 'child-animal-care'
  | 'fellowship-celebrations'
  | 'leadership-drives';

export interface GalleryFilter {
  key: 'all' | GalleryCategory;
  label: string;
}

export interface GalleryItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: GalleryCategory[];
  group: string;
}

export interface MembershipContent {
  title: string;
  benefits: string[];
  eligibility: string;
}

export interface ContactInfo {
  email: string;
  instagram: string;
  instagramHref: string;
  affiliation: string;
  location: string;
  phonePlaceholder: string;
  joinFormHref: string;
  meetingSchedulePlaceholder: string;
}
