import { writable } from 'svelte/store'
import { browser } from '$app/env'

export const themes = [
  {
    name: 'new',
    icon: '🌑',
  },
  {
    name: 'full',
    icon: '🌕',
  },
]

export const nextTheme = (theme) => {
  const index = themes.findIndex((check) => check.name === theme.name)
  return themes[(index + 1) % themes.length]
}

const prefersDarkMode = browser ? window.matchMedia('(prefers-color-scheme: dark)') : false

const osPreference = prefersDarkMode.matches ? themes[0] : themes[1]

let localStorageTheme = undefined
try {
  switch (window.localStorage.getItem('theme')) {
    case 'new':
      localStorageTheme = themes[0]
      break
    case 'full':
      localStorageTheme = themes[1]
      break
  }
} catch (e) {
  //eslint-disable-next-line no-console
  console.log('Failed to load theme from local storage')
}

export const theme = writable(localStorageTheme || osPreference || themes[1])

export const cycleTheme = () =>
  theme.update((currentTheme) => nextTheme(currentTheme))

theme.subscribe((theme) => {
  if (browser) {
    document.getElementById('svelte').classList.remove('full', 'new')
    document.getElementById('svelte').classList.add(theme.name)
  }
})

const osThemeListener = (e) => {
  const newOsPreference = e.matches ? themes[0] : themes[1]

  theme.set(localStorageTheme || newOsPreference || themes[1])
}

if (localStorageTheme === undefined) {
  if (browser) {
    prefersDarkMode.addListener(osThemeListener)
  }
}

export const removeOSThemeListener = () => {
  if (browser) {
    prefersDarkMode.removeListener(osThemeListener)
  }
}
