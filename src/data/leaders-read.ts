// Leaders Read: books on the hub. status 'soon' shows "Review coming soon".
// When a review is written, set status to 'reviewed' and add a slug (page at /leaders-read/<slug>/).
export type Book = { title: string; author: string; status: 'soon' | 'reviewed'; slug?: string };

export const BOOKS: Book[] = [
  { title: 'Trillion Dollar Coach', author: 'Eric Schmidt, Jonathan Rosenberg, Alan Eagle', status: 'soon' },
  { title: 'Multipliers', author: 'Liz Wiseman', status: 'soon' },
  { title: 'Unreasonable Hospitality', author: 'Will Guidara', status: 'soon' },
  { title: 'Start with Why', author: 'Simon Sinek', status: 'soon' },
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', status: 'soon' },
  { title: 'The Accidental Sales Manager', author: 'Chris Lytle', status: 'soon' },
  { title: 'The Anxious Generation', author: 'Jonathan Haidt', status: 'soon' },
];
