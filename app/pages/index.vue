<template>
  <div>
    <h1 class="mb-6 text-xl font-bold">Posts</h1>

    <p v-if="!posts?.length" class="text-sm text-gray-500 dark:text-gray-400">
      아직 글이 없습니다.
    </p>

    <ul v-else class="space-y-5">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path" class="group block">
          <div class="flex items-baseline gap-2">
            <span class="font-medium group-hover:underline">
              {{ post.title }}
            </span>
            <time
              :datetime="new Date(post.date).toISOString()"
              class="shrink-0 text-xs text-gray-500 dark:text-gray-400"
            >
              {{ formatDate(post.date) }}
            </time>
          </div>
          <p
            v-if="post.description"
            class="mt-1 text-sm text-gray-600 dark:text-gray-400"
          >
            {{ post.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all(),
)

const dateFormatter = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'long' })

function formatDate(value: string | Date) {
  return dateFormatter.format(new Date(value))
}

useSeoMeta({
  title: 'Posts',
  description: 'Kimmojae가 쓴 글 목록',
})
</script>
