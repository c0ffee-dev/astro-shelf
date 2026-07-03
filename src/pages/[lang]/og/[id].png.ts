import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { formatDate, generateOGImage } from '../../../shared/ogp';
import { defaultLang, Langs, type Lang } from '../../../i18n/config';

export async function getStaticPaths() {
  const allPaths = [];
  for (const lang of Langs) {
    if (lang === defaultLang) {
      continue;
    }

    try {
      const collectionKey = (lang ? `blog-${lang}` : 'blog') as any as 'blog';
      const posts = await getCollection(collectionKey);

      const pathsForLang = posts.map(entry => ({
        params: { lang: lang, id: entry.id },
        props: { title: entry.data.title, dateString: formatDate(entry.data.createdAt), thumbnail: entry.data.thumbnail },
      }));

      allPaths.push(...pathsForLang);
    } catch (e) {}
  }

  return allPaths;
}

export const GET: APIRoute = async ({ props, params }) => {
  const { lang } = params;
  const { title, dateString, thumbnail } = props;
  return await generateOGImage(title, dateString, thumbnail, (lang ?? defaultLang) as Lang)
};
