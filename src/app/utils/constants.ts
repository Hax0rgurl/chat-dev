/**
 * Application constants
 */

export const APP_CONFIG = {
  NAME: 'ChatDev IDE',
  VERSION: '1.5.1',
  DESCRIPTION: 'Building your AI Agent',
  AUTHOR: '10cl',
  REPOSITORY: 'https://github.com/10cl/chatdev',
  WEBSITE: 'https://chatdev.toscl.com',
  DISCORD: 'https://discord.gg/fdjWfgGPjb'
} as const

export const API_ENDPOINTS = {
  COMMUNITIES: 'https://chatdev.toscl.com/api/get_communities',
  YAML: 'https://chatdev.toscl.com/api/get_yaml',
  UPLOAD: 'https://chatdev.toscl.com/api/upload',
  ARKOSE: 'https://chatdev.toscl.com/api/arkose',
  PREMIUM: 'https://chatdev.toscl.com/api/premium'
} as const

export const STORAGE_KEYS = {
  PROMPTS: 'prompts',
  USER_CONFIG: 'userConfig',
  THEME_MODE: 'themeMode',
  THEME_COLOR: 'themeColor',
  SIDEBAR_COLLAPSED: 'sidebarCollapsed',
  EDITOR_LAYOUT: 'editorLayout',
  GAME_MODE: 'gameModeEnable',
  CHAT_MODE: 'workFlowingDisable',
  PLAYER_NAME: 'player_name',
  FINGERPRINT: 'fp',
  VERSION: 'version'
} as const

export const UI_CONSTANTS = {
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 4000,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_MESSAGE_LENGTH: 4000,
  EDITOR_AUTO_SAVE_DELAY: 2000
} as const

export const SUPPORTED_FILE_TYPES = {
  IMAGES: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  DOCUMENTS: ['.pdf', '.txt', '.md', '.csv', '.json'],
  CODE: ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cpp', '.c', '.go', '.rs']
} as const

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection failed. Please check your internet connection.',
  UNAUTHORIZED: 'Authentication required. Please log in to continue.',
  FORBIDDEN: 'Access denied. You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  RATE_LIMITED: 'Too many requests. Please wait a moment before trying again.',
  INVALID_INPUT: 'Invalid input provided. Please check your data and try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again later.'
} as const

export const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  YAML_KEY: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
  AGENT_NAME: /^[a-zA-Z0-9_\-\s]{3,50}$/
} as const

export const PERFORMANCE_THRESHOLDS = {
  SLOW_OPERATION: 1000, // ms
  VERY_SLOW_OPERATION: 3000, // ms
  MEMORY_WARNING: 100 * 1024 * 1024, // 100MB
  MEMORY_CRITICAL: 500 * 1024 * 1024 // 500MB
} as const