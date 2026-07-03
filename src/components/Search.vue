<script setup>
import { ref } from 'vue';

const props = defineProps({
  labels: {
    type: Object,
    default: () => ({
      placeholder: 'Search articles...',
      typing: 'Start typing to search...',
      noResults: 'No results found.',
      searching: 'Searching...'
    })
  }
});

const searchQuery = ref('');
const results = ref([]);
const isSearching = ref(false);
const hasSearched = ref(false);

let pagefind = null;

const initPagefind = async () => {
  if (!pagefind) {
    try {
      pagefind = await import("/pagefind/pagefind.js");
      await pagefind.init();
    } catch (e) {
      console.error("Failed to load Pagefind:", e);
    }
  }
};

const handleInput = async () => {
  const query = searchQuery.value.trim();

  if (query.length < 2) {
    results.value = [];
    hasSearched.value = false;
    return;
  }

  if (!pagefind) await initPagefind();
  if (!pagefind) return;

  isSearching.value = true;
  hasSearched.value = true;

  try {
    const search = await pagefind.search(query);
    const topResults = search.results.slice(0, 10);

    const loadedResults = await Promise.all(
      topResults.map(async (result) => {
        const data = await result.data();
        return {
          id: result.id,
          url: data.url,
          title: data.meta.title || 'Untitled',
          excerpt: data.excerpt
        };
      })
    );

    results.value = loadedResults;
  } catch (e) {
    console.error("Search error:", e);
  } finally {
    isSearching.value = false;
  }
};
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div class="relative mb-8">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-ink-light/40 dark:text-ink-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        v-model="searchQuery"
        type="search"
        :placeholder="labels.placeholder"
        class="w-full pl-10 pr-4 py-3 border border-ink-light/30 dark:border-ink-dark/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-ink-light/50 dark:focus:ring-ink-dark/50 focus:border-transparent bg-ink-light/5 dark:bg-ink-dark/5 text-ink-light dark:text-ink-dark placeholder-ink-light/40 dark:placeholder-ink-dark/40"
        autocomplete="off"
        @focus="initPagefind"
        @input="handleInput"
      />
    </div>

    <div class="space-y-8">
      <div v-if="!hasSearched" class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-ink-light/20 dark:text-ink-dark/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <p class="mt-4 text-ink-light/40 dark:text-ink-dark/40">{{ labels.typing }}</p>
      </div>

      <div v-else-if="isSearching" class="text-center py-12">
        <p class="text-ink-light/40 dark:text-ink-dark/40">{{ labels.searching }}</p>
      </div>

      <div v-else-if="results.length === 0" class="text-center py-12">
        <p class="text-ink-light/40 dark:text-ink-dark/40">{{ labels.noResults }}</p>
      </div>

      <div v-else class="space-y-4">
        <article
          v-for="item in results"
          :key="item.id"
          class="p-4 rounded-sm hover:bg-ink-light/5 dark:hover:bg-ink-dark/5 transition-colors border border-ink-light/10 dark:border-ink-dark/10"
        >
          <a :href="item.url" class="block group">
            <h3 class="text-xl font-semibold text-ink-light dark:text-ink-dark group-hover:text-ink-light/80 dark:group-hover:text-ink-dark/80 transition-colors">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm text-ink-light/60 dark:text-ink-dark/60 line-clamp-3" v-html="item.excerpt"></p>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(mark) {
  background-color: rgba(254, 240, 138, 0.4);
  color: inherit;
  padding: 0 2px;
  border-radius: 2px;
  font-weight: 500;
}

:global(.dark) :deep(mark) {
  background-color: rgba(234, 179, 8, 0.3);
}
</style>
