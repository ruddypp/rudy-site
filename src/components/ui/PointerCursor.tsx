import { Suspense, lazy, useSyncExternalStore } from 'react'

const SmoothCursor = lazy(() =>
  import('./smooth-cursor').then((m) => ({ default: m.SmoothCursor })),
)

const QUERY = '(pointer: fine)'

function subscribe(onChange: () => void) {
  const query = window.matchMedia(QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(QUERY).matches
// Prerendering has no pointer to ask about, so assume none and let the client decide.
const getServerSnapshot = () => false

/**
 * A custom cursor is meaningless without a pointer, so on touch devices it is
 * never loaded at all — it would only cost main-thread work. On pointer
 * devices it is code-split, so it stays out of the initial bundle.
 */
export default function PointerCursor() {
  const hasPointer = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (!hasPointer) return null

  return (
    <Suspense fallback={null}>
      <SmoothCursor />
    </Suspense>
  )
}
