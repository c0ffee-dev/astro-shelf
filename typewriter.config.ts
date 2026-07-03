import fs from 'node:fs';
import path from 'node:path';
import type { Config } from './src/types';

const config: Config = {
    site: {
        baseUrl: 'https://astro-shelf.vercel.app',
        name: 'Astro-Shelf',
        header_sitename: '_shelf.astro',
        copyright: 'c0ffee-dev'
    },
    author: {
        name: 'Lorem Ipsum',
        avatar: ''
    },
    i18n: {
        defaultLang: 'en',
        fonts: {
            "ja": {
                name: 'Noto Sans JP',
                font: fs.readFileSync(path.resolve('public/fonts/noto/NotoSansJP-Bold.ttf'))
            },
            "en": {
                name: 'Inter',
                font: fs.readFileSync(path.resolve('public/fonts/inter/Inter_18pt-Bold.ttf'))
            },
//            "ko": {
//                name: 'Noto Sans KR',
//                font: fs.readFileSync(path.resolve('public/fonts/noto/NotoSansKR-Bold.ttf'))
//            },
        }
    },

}

export default config;
