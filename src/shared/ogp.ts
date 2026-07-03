import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { BlogOgpTemplate } from '../components/BlogOGP';
import { type Lang } from '../i18n/config';
import config from '../../typewriter.config';

export const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yyyy}.${mm}.${dd}`;
};

export async function generateOGImage(title: string, dateString: string, thumbnail: string, lang: Lang): Promise<Response> {
    const font = config.i18n.fonts[lang];
    const svg = await satori(
        BlogOgpTemplate({ title, dateString, thumbnail }),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: font.name,
                    data: font.font,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(new Uint8Array(pngBuffer), {
        headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
        },
    });
}
