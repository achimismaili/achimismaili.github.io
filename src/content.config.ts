import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
import { gallerySchema } from '@achimismaili/easy-web-content-blocks/schemas/galleries';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    locale: z.enum(['de', 'en']),
    translationKey: z.string(),
    layout: z.string().optional(),
  }),
});

const siteConfig = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/data' }),
  schema: z.object({
    companyName: z.string().optional(),
    defaultTitle: z.string().optional(),
    url: z.string().optional(),
  }).loose(),
});

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/galleries' }),
  schema: gallerySchema,
});

export const collections = { pages, siteConfig, galleries };
