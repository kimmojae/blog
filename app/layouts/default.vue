<template>
  <div class="mx-auto min-h-screen max-w-2xl px-6 py-8">
    <header class="mb-10 flex items-center">
      <NuxtLink to="/" class="font-bold">Kimmojae</NuxtLink>

      <nav class="ml-auto flex items-center gap-1">
        <NuxtLink
          to="/about"
          class="rounded p-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          About
        </NuxtLink>

        <a
          href="https://github.com/kimmojae"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="inline-flex size-9 items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Icon name="uil:github" />
        </a>

        <ColorModeToggle />
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s · Kimmojae',
})
</script>
