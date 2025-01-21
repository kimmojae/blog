<template>
  <div class="m-auto max-w-2xl p-6 pt-3 md:pt-6 min-h-screen">
    <header class="flex mb-5 md:mb-10 items-center">
      <NuxtLink to="/" class="text-md md:text-lg whitespace-nowrap font-bold"
        >Kimmojae
      </NuxtLink>

      <nav class="flex grow justify-end items-center gap-1 md:gap-3">
        <NuxtLink
          to="/about"
          class="inline-flex hover:bg-gray-200 dark:hover:bg-[#334555] rounded-sm p-2 text-xs"
          >About
        </NuxtLink>

        <a
          href="https://github.com/kimmojae"
          target="_blank"
          class="inline-flex hover:bg-gray-200 dark:hover:bg-[#334555] rounded-sm p-2"
        >
          <Icon name="uil:github" />
        </a>

        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </nav>
    </header>

    <main class="max-w-2xl m-auto mb-10 text-sm">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Kimmojae',
})
</script>
