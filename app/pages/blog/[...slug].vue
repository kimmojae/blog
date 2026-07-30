<template>
  <article class="prose prose-gray max-w-none dark:prose-invert">
    <ContentRenderer v-if="post" :value="post" />
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  key: route => route.fullPath,
})

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first(),
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>
