const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

/**
 * gtag.js only runs commands pushed as a real `arguments` object. A plain
 * array (what rest params or `push(['event', ...])` produce) is read as a
 * data-layer method call and dropped without an error, so no config and no
 * events would ever reach GA4.
 */
const gtag: (...args: unknown[]) => void = function () {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

function isLocalHost() {
  const { hostname } = window.location
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]'
}

/**
 * Loads gtag.js for GA4. Production builds only, and never on localhost, so our
 * own dev and `vite preview` visits stay out of the reports.
 */
export function initAnalytics() {
  if (!import.meta.env.PROD || !MEASUREMENT_ID || isLocalHost()) return
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)
}

/**
 * Sends a GA4 event. No-op when gtag was never loaded (dev, localhost, or a
 * blocked request), so call sites never need to guard.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !Array.isArray(window.dataLayer)) return
  gtag('event', name, params)
}
