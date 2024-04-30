import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const lightThemeDefault = {
    '--song-border-color': '#363637',
    '--song-text-color': '#303133',
    '--song-bg-color': '#f2f3f5'
  }

  const darkThemeDefault = {
    '--song-border-color': '#636466',
    '--song-text-color': '#e5eaf3',
    '--song-bg-color': '#0a0a0a'
  }

  const lightThemeCustom = ref({
    '--song-border-color': '#363637',
    '--song-text-color': '#303133',
    '--song-bg-color': '#f2f3f5'
  })

  const darkThemeCustom = ref({
    '--song-border-color': '#636466',
    '--song-text-color': '#e5eaf3',
    '--song-bg-color': '#0a0a0a'
  })

  return { lightThemeDefault, darkThemeDefault, lightThemeCustom, darkThemeCustom }
})
