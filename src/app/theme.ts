import { getUserThemeMode } from '~services/theme'
import { applyThemeMode } from './utils/color-scheme'

// Ensure theme is applied immediately
document.documentElement.classList.add('light')

applyThemeMode(getUserThemeMode())

export {}