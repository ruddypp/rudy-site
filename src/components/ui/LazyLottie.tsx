import { Suspense, lazy, useEffect, useState } from 'react'

const Lottie = lazy(() => import('lottie-react'))

type Props = {
  /** Path to a Lottie JSON under /public, e.g. "/lottie/hero.json" */
  src: string
  /** Intrinsic width of the animation, from the JSON's `w` field. */
  width: number
  /** Intrinsic height of the animation, from the JSON's `h` field. */
  height: number
  className?: string
  loop?: boolean
}

/**
 * Renders a Lottie animation without paying for it up front: both the player
 * and the animation JSON are fetched after mount, so neither lands in the
 * initial bundle.
 *
 * The wrapper reserves the animation's aspect ratio from the first paint, so
 * the late-arriving animation cannot shift the layout around it. Purely
 * decorative, so it degrades to reserved empty space.
 */
export default function LazyLottie({ src, width, height, className, loop = true }: Props) {
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

  const reserved = { aspectRatio: `${width} / ${height}` }

  if (!data) return <div className={className} style={reserved} aria-hidden="true" />

  return (
    <Suspense fallback={<div className={className} style={reserved} aria-hidden="true" />}>
      <div className={className} style={reserved}>
        <Lottie animationData={data} loop={loop} className="h-full w-full" />
      </div>
    </Suspense>
  )
}
