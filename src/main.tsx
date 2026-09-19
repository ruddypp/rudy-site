import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import { initAnalytics } from './lib/analytics'

function applyStoredTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
}

export const createRoot = ViteReactSSG({ routes }, ({ isClient }) => {
  // Both touch browser-only APIs, so they must not run during prerendering.
  if (!isClient) return
  applyStoredTheme()
  initAnalytics()
})
