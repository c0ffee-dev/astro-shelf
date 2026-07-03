import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { defaultLang, Langs } from './i18n/config';

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().default(""),
  thumbnail: z.url().nullable().default(null),
  createdAt: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  translation: z.object({
    isAutoTranslated: z.boolean().default(false),
    translateModel: z.string().nullable().default(null)
  }).nullable().default(null),
  externalTranslation: z
    .record(
      z.string(),
      z.union([
        z.url(),
        z.object({
          url: z.url(),
          title: z.string().optional(),
        }),
      ]),
    )
    .optional(),
  dumbArticle: z.object({
    url: z.url(),
  }).optional(),
});

const locales = Langs ?? [] as readonly string[];
const defaultLocale = defaultLang;

export const collections = locales.reduce((acc, value) => {
  const loader = glob({ pattern: '**/[^_]*.{md,mdx}', base: `./content/${value}` });
  const collection = defineCollection({ loader, schema: blogSchema });

  if (value === defaultLocale) {
    acc['blog'] = collection;
  } else {
    acc[`blog-${value}`] = collection;
  }

  return acc;
}, {} as Record<"blog" | `blog-${string}`, ReturnType<typeof defineCollection<typeof blogSchema>>>);
