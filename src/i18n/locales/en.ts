import type { i18nTranslation } from "../types"

const locale: i18nTranslation = {
    isoLocale: 'en-US',
    index: {
        recent_posts: 'Recent Posts',
        view_all_posts: 'View All Posts'
    },

    archive: {
        archive_page: (currentPage, lastPage) => `Archive [Page ${currentPage}/${lastPage}]`,
        nav: {
            prev: 'PREV',
            next: 'NEXT'
        }
    },

    article: {
        ai_translated: 'LLM Translated',
        back_to_index: 'Back to index'
    },

    search: {
        placeholder: 'Search articles...',
        typing: 'Start typing to search...',
        noResults: 'No results found.',
        searching: 'Searching...'
    }
}

export default locale;
