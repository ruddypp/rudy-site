import { Suspense, lazy, useEffect, useState } from 'react'

const Lottie = lazy(() => import('lottie-react'))

type Props = {
  /** Path to a Lottie JSON under /public, e.g. "/lottie/hero.json" */
  src: string
  className?: string
  loop?: boolean
}

/**
 * Renders a Lottie animation without paying for it up front: both the player
 * and the animation JSON are fetched after mount, so neither lands in the
 * initial bundle. Purely decorative, so it degrades to empty space.
 */
export default function LazyLottie({ src, className, loop = true }: Props) {
  const [data, setData] = useState<object | null>(null)

  useEffect(() => {
    let active = true
    fetch(src)
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (active) setData(json)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [src])

  if (!data) return <div className={className} aria-hidden="true" />

  return (
    <Suspense fallback={<div className={className} aria-hidden="true" />}>
      <Lottie animationData={data} loop={loop} className={className} />
    </Suspense>
  )
}
