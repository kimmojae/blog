<template>
  <ClientOnly>
    <button
      type="button"
      :aria-label="`Switch to ${nextMode} mode`"
      class="inline-flex size-9 items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
      @click="colorMode.preference = nextMode"
    >
      <Icon :name="nextMode === 'dark' ? 'heroicons:moon' : 'heroicons:sun'" />
    </button>
    <template #fallback>
      <div class="size-9" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const nextMode = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))
</script>
