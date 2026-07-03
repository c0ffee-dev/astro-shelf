import type { i18nTranslation } from "../types"

const locale: i18nTranslation = {
    isoLocale: 'ko-KR',
    index: {
        recent_posts: '최근 글',
        view_all_posts: '전체 글 보기'
    },

    archive: {
        archive_page: (currentPage, lastPage) => `보관함 [${currentPage}/${lastPage} 페이지]`,
        nav: {
            prev: '이전',
            next: '다음'
        }
    },

    article: {
        ai_translated: 'LLM으로 번역됨',
        back_to_index: '목록으로'
    },

    search: {
        placeholder: '글 검색...',
        typing: '검색어를 입력하세요...',
        noResults: '검색 결과가 없습니다.',
        searching: '검색 중...'
    }
}

export default locale;
