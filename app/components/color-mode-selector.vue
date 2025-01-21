<template>
  <button
    class="inline-flex items-center justify-center p-2 rounded-sm hover:bg-gray-200 dark:hover:bg-[#334555]"
    @click="toggleMode"
  >
    <Icon :name="nextModeIcon" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const nextModeIcons = {
  light: 'heroicons:sun',
  dark: 'heroicons:moon',
}

const nextMode = computed(() => {
  if (colorMode.preference === 'system') {
    return colorMode.value === 'dark' ? 'light' : 'dark'
  }
  return colorMode.preference === 'light' ? 'dark' : 'light'
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => (colorMode.preference = nextMode.value)
</script>
