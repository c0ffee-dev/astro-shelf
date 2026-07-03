import type { Lang } from "./i18n/config"

export type Config = {
    site: {
        baseUrl: string,
        name: string,
        header_sitename: string,
        copyright: string
    },
    author: {
        name: string
        avatar: string
    },
    i18n: {
        defaultLang: Lang,
        fonts: Record<Lang, {
          name: string,
          font: Buffer<ArrayBuffer>
        }>
    }
}
