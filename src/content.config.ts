import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
  author: z.string().default('David McMahon'),
  description: z.string(),
  featuredImage: z.string().optional(),
  originalUrl: z.string().optional(),
  series: z.string().optional(),
  status: z.enum(['draft', 'published']).default('published'),
  keywords: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  notes: z.string().optional(),
});

export const collections = {
  blog: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/blog' }), schema: post }),
  rico: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/rico' }), schema: post }),
  pages: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/pages' }),
    schema: z.object({ title: z.string(), slug: z.string().optional(), headline: z.string().optional() }).passthrough(),
  }),
};
