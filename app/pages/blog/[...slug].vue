<template>
  <article class="prose">
    <ContentRenderer v-if="post" :value="post" />
  </article>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(() => {
  return queryCollection('blog').path(route.path).first()
})
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
</script>
