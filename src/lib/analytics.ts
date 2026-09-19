const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

declare global {
  interface Window {
    dataLayer: unknown[]
  }
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
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)
}
