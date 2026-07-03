const locale = {
    isoLocale: 'ja-JP',
    index: {
        recent_posts: '最近の投稿',
        view_all_posts: 'すべての投稿を見る'
    },

    archive: {
        archive_page: (currentPage: string, lastPage: string) => `Archive [${currentPage}/${lastPage} ページ]`,
        nav: {
            prev: '前',
            next: '次'
        }
    },

    article: {
        ai_translated: 'LLMによる翻訳',
        back_to_index: '記事一覧へ'
    },

    search: {
        placeholder: '記事を検索...',
        typing: '入力して検索を開始',
        noResults: '結果はありません',
        searching: '検索中...'
    }

}

export default locale;
