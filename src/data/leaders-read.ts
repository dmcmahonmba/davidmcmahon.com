// Leaders Read: books on the hub, grouped by section. status 'soon' shows "Review coming soon".
// When a review is written, set status to 'reviewed' and add a slug (page at /leaders-read/<slug>/).
export type Book = { title: string; author: string; status: 'soon' | 'reviewed'; slug?: string };
export type Section = { name: string; books: Book[] };

const soon = (title: string, author: string): Book => ({ title, author, status: 'soon' });

export const SECTIONS: Section[] = [
  {
    name: 'Leadership',
    books: [
      soon('Trillion Dollar Coach', 'Eric Schmidt, Jonathan Rosenberg, Alan Eagle'),
      soon('Start with Why', 'Simon Sinek'),
      soon('The 7 Habits of Highly Effective People', 'Stephen R. Covey'),
      soon('Multipliers', 'Liz Wiseman'),
    ],
  },
  {
    name: 'Management',
    books: [
      soon('Unreasonable Hospitality', 'Will Guidara'),
      soon('The Accidental Sales Manager', 'Chris Lytle'),
    ],
  },
  {
    name: 'Business and tech',
    books: [
      soon('The Business of Expertise', 'David C. Baker'),
      soon('The Anxious Generation', 'Jonathan Haidt'),
    ],
  },
  {
    name: 'Sports',
    books: [soon('The Last Folk Hero', 'Jeff Pearlman')],
  },
  {
    name: 'Biographies and memoirs',
    books: [
      soon('Fifty Years of 60 Minutes', 'Jeff Fager'),
      soon('When the Going Was Good', 'Graydon Carter'),
      soon('Roll the Calls', 'Ari Emanuel'),
    ],
  },
];
