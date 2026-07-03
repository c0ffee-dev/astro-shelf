import { readFile } from 'node:fs/promises'

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { formatDate, generateOGImage } from '../../shared/ogp';
import { defaultLang, type Lang } from '../../i18n/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog');
  return blogEntries.map(async (entry) => {
    return {
      params: { id: entry.id },
      props: { title: entry.data.title, dateString: formatDate(entry.data.createdAt), thumbnail: entry.data.thumbnail },
    }
  });
}

export const GET: APIRoute = async ({ props, params }) => {
  const lang = defaultLang as Lang;
  const { title, dateString, thumbnail } = props;
  return await generateOGImage(title, dateString, thumbnail, lang)
};
