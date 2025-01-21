<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-start md:items-center mt-5">
      <div class="flex items-center md:space-x-12">
        <div class="hidden md:block">
          <NuxtLink to="/" class="text-xl font-semibold p-2"
            >Kimmojae
          </NuxtLink>
        </div>

        <!-- <Menu /> -->
      </div>

      <!-- <ClientOnly>
        <ColorModeSelector />
      </ClientOnly> -->
    </header>

    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Kimmojae',
})
</script>

<style></style>
