import type {
  NavItem,
  LeoPillarItem,
  ImpactStat,
  PillarOfImpact,
  LeadershipMember,
  GalleryFilter,
  GalleryItem,
  MembershipContent,
  ContactInfo,
} from '@/types/content.types';

export const siteMeta = {
  name: 'The Leo Club of CBD Elites',
  tagline: 'Leadership. Experience. Opportunity.',
  affiliationShort: 'Lions Clubs International · District 3231 A4 · Leo Multiple 3231',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Leadership & Board', href: '#leadership' },
  { label: 'Projects & Events', href: '#gallery' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export const heroContent = {
  headline: 'Leadership. Experience. Opportunity.',
  subheadline:
    'Welcome to The Leo Club of CBD Elites — empowering youth to serve communities, develop leadership skills, and create meaningful impact.',
  ctaPrimary: 'Explore Our Impact',
  ctaSecondary: 'Join The Movement',
  badge: 'Affiliated with Lions Clubs International',
};

export const leoMotto: LeoPillarItem[] = [
  {
    key: 'leadership',
    title: 'Leadership',
    description: 'Developing skills as project organizers, time managers, and team leaders.',
  },
  {
    key: 'experience',
    title: 'Experience',
    description: 'Learning how teamwork and dedication can solve real-world community challenges.',
  },
  {
    key: 'opportunity',
    title: 'Opportunity',
    description: 'Discovering the satisfaction of volunteer service and making lifelong connections.',
  },
];

export const impactStats: ImpactStat[] = [
  {
    label: 'Community Service Projects Executed',
    value: '50+',
    numericTarget: 50,
    suffix: '+',
  },
  {
    label: 'Lives Impacted',
    value: '10,000+',
    numericTarget: 10000,
    suffix: '+',
  },
  {
    label: 'Active Youth Members',
    value: '40+',
    numericTarget: 40,
    suffix: '+',
  },
  {
    label: 'Affiliation',
    value: 'District 3231 A4',
    numericTarget: null,
    suffix: '',
  },
];

export const aboutContent = {
  title: 'About The Leo Club of CBD Elites',
  subtitle: 'Excellence, the Elite Way.',
  whoWeAre:
    'The Leo Club of CBD Elites is a vibrant youth organization chartered under Lions International, District 3231 A4 — Leo Multiple 3231. Based in Navi Mumbai, our club brings together young leaders dedicated to creating measurable impact through service, compassion, and fellowship.',
  mission:
    'To provide the youth of our community with an opportunity for development and contribution, individually and collectively, as responsible members of the local, national, and international community.',
  affiliationNote:
    'As an officially chartered Leo Club, we work closely alongside our parent Lions Club, inheriting a rich legacy of global service, integrity, and fellowship.',
};

export const pillarsOfImpact: PillarOfImpact[] = [
  {
    title: 'Child Welfare',
    description: 'Uplifting and empowering children through learning, creative workshops, and everyday kindness.',
    icon: 'child',
  },
  {
    title: 'Animal Welfare',
    description: 'Protecting, feeding, and caring for stray animals across our city.',
    icon: 'paw',
  },
  {
    title: 'Youth & Leadership Development',
    description: 'Nurturing capable young leaders who lead by serving.',
    icon: 'compass',
  },
  {
    title: 'Community & Inclusion',
    description: 'Fostering fellowship, dignity, and a sense of belonging for all sections of society.',
    icon: 'hands',
  },
];

export const leadershipYear = 'Leoistic Year 2026–27';

export const leadershipBoard: LeadershipMember[] = [
  {
    name: 'Leo Chaitanya Obhan',
    position: 'President',
    order: 1,
    photo: '/images/leadership/chaitanya-obhan.jpg',
    quote: 'Leading with passion and dedication to serve our community.',
  },
  {
    name: 'Leo Manas Patil',
    position: 'Vice President',
    order: 2,
    photo: '/images/leadership/manas-patil.jpg',
  },
  {
    name: 'Leo Riya Shigwan',
    position: 'Secretary',
    order: 3,
    photo: '/images/leadership/riya-shigwan.jpg',
    quote: 'Managing organizational operations and communications.',
  },
  {
    name: 'Rajat Disawal',
    position: 'Jt. Secretary',
    order: 4,
    photo: '/images/leadership/rajat-disawal.jpg',
  },
  {
    name: 'Leo Gaurav Suvarna',
    position: 'Treasurer',
    order: 5,
    photo: '/images/leadership/gaurav-suvarna.jpg',
    quote: 'Ensuring financial integrity and resource allocation.',
  },
  {
    name: 'Leo Namrata Chordia',
    position: 'Immediate Past President',
    order: 6,
    photo: '/images/leadership/namrata-chordia.jpg',
  },
  {
    name: 'Leo Amey Kadam',
    position: 'Marketing Director',
    order: 7,
    photo: '/images/leadership/amey-kadam.jpg',
  },
  {
    name: 'Leo Anshi Singh',
    position: 'Leadership Director',
    order: 8,
    photo: '/images/leadership/anshi-singh.jpg',
  },
  // Fellowship Director intentionally omitted — no name provided in source content.
];

export const galleryFilters: GalleryFilter[] = [
  { key: 'all', label: 'All' },
  { key: 'service-welfare', label: 'Service & Welfare' },
  { key: 'child-animal-care', label: 'Child & Animal Care' },
  { key: 'fellowship-celebrations', label: 'Fellowship & Celebrations' },
  { key: 'leadership-drives', label: 'Leadership & Drives' },
];

export const galleryItems: GalleryItem[] = [
  {
    slug: 'vanmahotsav-plantation',
    title: 'Vanmahotsav Plantation Drive',
    description: 'Tree planting initiatives putting down green roots in the city.',
    image: '/images/gallery/vanmahotsav-plantation.jpg',
    categories: ['service-welfare'],
    group: 'Environmental & Animal Welfare',
  },
  {
    slug: 'stray-feeding-drive',
    title: 'Stray Feeding Drive',
    description: 'Care and feeding programs for street animals across local neighborhoods.',
    image: '/images/gallery/stray-feeding-drive.jpg',
    categories: ['service-welfare', 'child-animal-care'],
    group: 'Environmental & Animal Welfare',
  },
  {
    slug: 'trail-cleaning-trek',
    title: 'Trail Cleaning Trek',
    description: 'Environmental cleanup drive combined with an overnight fellowship stay.',
    image: '/images/gallery/trail-cleaning-trek.jpg',
    categories: ['service-welfare', 'fellowship-celebrations'],
    group: 'Environmental & Animal Welfare',
  },
  {
    slug: 'diwali-diya-painting',
    title: 'Diwali Diya Painting with Kids',
    description: 'Creative arts session spreading festive joy with underprivileged children.',
    image: '/images/gallery/diwali-diya-painting.jpg',
    categories: ['child-animal-care'],
    group: 'Child Welfare & Community Service',
  },
  {
    slug: 'book-clothing-donation',
    title: 'Book & Clothing Donation Drives',
    description: 'Collecting and distributing essential learning tools and apparel.',
    image: '/images/gallery/book-clothing-donation.jpg',
    categories: ['service-welfare', 'child-animal-care'],
    group: 'Child Welfare & Community Service',
  },
  {
    slug: 'trans-community-nukkad-natak',
    title: 'Trans Community Nukkad Natak',
    description: 'Street play initiative advocating dignity, awareness, and inclusion.',
    image: '/images/gallery/trans-community-nukkad-natak.jpg',
    categories: ['leadership-drives'],
    group: 'Child Welfare & Community Service',
  },
  {
    slug: 'ganpati-navratri',
    title: 'Ganpati & Navratri Celebrations',
    description: 'Community festive gatherings bringing members together.',
    image: '/images/gallery/ganpati-navratri.jpg',
    categories: ['fellowship-celebrations'],
    group: 'Fellowship & Cultural Events',
  },
  {
    slug: 'makar-sankranti-holi',
    title: 'Makar Sankranti Kite-Making & Holi Socials',
    description: 'Cultural workshops and celebrations.',
    image: '/images/gallery/makar-sankranti-holi.jpg',
    categories: ['fellowship-celebrations'],
    group: 'Fellowship & Cultural Events',
  },
  {
    slug: 'charity-run-jam',
    title: 'Charity Run & JAM Competition',
    description: 'Interactive youth gatherings, sports, and public speaking competitions.',
    image: '/images/gallery/charity-run-jam.jpg',
    categories: ['fellowship-celebrations', 'leadership-drives'],
    group: 'Fellowship & Cultural Events',
  },
];

export const membershipContent: MembershipContent = {
  title: 'Why Join The Leo Club of CBD Elites?',
  benefits: [
    'Develop crucial public speaking, management, and team leadership skills.',
    'Build lifelong friendships with like-minded, service-oriented youth.',
    'Gain valuable international certification and recognition through Lions Clubs International.',
    'Make a direct, positive impact in Navi Mumbai and beyond.',
  ],
  eligibility: 'Open to enthusiastic young individuals aged 12 to 30 years.',
};

export const contactInfo: ContactInfo = {
  email: 'leoclubofcbdelites@gmail.com',
  instagram: '@leoclubofcbdelites',
  instagramHref: 'https://instagram.com/leoclubofcbdelites',
  affiliation: 'Leo Club of Lions International, District 3231 A4 — Leo Multiple 3231 · Mumbai, India',
  location: 'CBD Belapur, Navi Mumbai, Maharashtra, India',
  phonePlaceholder: '[Phone Number]',
  // TODO: replace with the real Google Form link for membership interest.
  joinFormHref: '#',
  meetingSchedulePlaceholder: '[Meeting Schedule — to be announced]',
};

export const galleryHeader = {
  title: 'Activity & Service Gallery',
  subtitle: 'Moments of service, fellowship, and impact across Navi Mumbai.',
};

export const contactHeader = {
  title: 'Get in Touch',
  subtitle: 'Have a question, want to collaborate, or ready to join the family? Reach out to us.',
};

export const footerContent = {
  bio: 'The Leo Club of CBD Elites is a vibrant youth organization dedicated to service, leadership, and fellowship in Navi Mumbai.',
  motto: 'Leadership. Experience. Opportunity.',
  districtRecognition: 'Chartered under Lions International, District 3231 A4 — Leo Multiple 3231.',
  copyright: 'The Leo Club of CBD Elites. All Rights Reserved.',
};
