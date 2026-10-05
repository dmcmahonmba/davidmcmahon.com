// One source of truth for identity, social profiles, and schema facts.
export const SITE = {
  url: 'https://davidmcmahon.com',
  name: 'David McMahon',
  alternateNames: ['Dave McMahon', 'David MacMahon'],
  title: 'David (Dave) McMahon',
  jobTitle: 'Fractional Consultant, Reputation Management, SEO, and AI Implementation',
  description:
    'David (Dave) McMahon is a Butler University MBA, former Division I football captain, and operating executive. He is a fractional consultant in reputation management, SEO, branding, and AI implementation in Sarasota, Florida.',
  disambiguation:
    'Butler University MBA and former Division I football captain based in Sarasota, Florida. Not the film producer who works with Ken Burns.',
  image: '/images/david-mcmahon.jpg', // swap for the final headshot
  verification: 'IWE2QITOIALINw1zTFFj3ln_LHzOkm7tdtqlRsJw6mY', // existing Search Console meta tag
  knowsAbout: [
    'Online reputation management',
    'Search engine optimization',
    'Entity SEO',
    'Schema markup',
    'Google Knowledge Panels',
    'Review management',
    'AI implementation',
    'Answer engine optimization',
    'Client services leadership',
    'Team leadership',
    'Butler football',
  ],
};

// inSchema=false keeps a link in the footer but out of the Person sameAs list.
export const SOCIALS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/davidmcmahonmba', inSchema: true },
  { name: 'Instagram', url: 'https://www.instagram.com/emma_and_elsie/', inSchema: true },
  { name: 'X', url: 'https://x.com/researchcte4me', inSchema: true },
  { name: 'Medium', url: 'https://medium.com/@davidmcmahon11', inSchema: true },
  { name: 'Crunchbase', url: 'https://www.crunchbase.com/person/david-mcmahon-ecc1', inSchema: true },
  { name: 'Substack', url: 'https://substack.com/@davidmcmahon55', inSchema: true },
];

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-david/' },
  { label: 'Resume', href: '/resume/' },
  { label: 'Blog', href: '/blog-posts/' },
  { label: "Uncle Rico's Corner", href: '/uncle-ricos-corner/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
];
