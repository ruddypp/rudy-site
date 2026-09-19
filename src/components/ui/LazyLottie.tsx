import { Suspense, lazy, useEffect, useState } from 'react'

const Lottie = lazy(() => import('lottie-react'))

type Props = {
  /** Path to a Lottie JSON under /public, e.g. "/lottie/hero.json" */
  src: string
  /** Intrinsic width of the animation, from the JSON's `w` field. */
  width: number
  /** Intrinsic height of the animation, from the JSON's `h` field. */
  height: number
  /**
   * Optional still frame rendered immediately, under the animation. Give this
   * to any animation that sits above the fold: without it the largest paint in
   * that box waits on the whole chain (bundle, mount, JSON fetch, player
   * import), and the animation becomes a slow LCP element.
   */
  poster?: string
  posterAlt?: string
  className?: string
  loop?: boolean
}

/**
 * Renders a Lottie animation without paying for it up front: both the player
 * and the animation JSON are fetched after mount, so neither lands in the
 * initial bundle.
 *
 * The wrapper holds the animation's aspect ratio from the first paint, so the
 * late-arriving animation cannot shift the layout around it.
 */
export default function LazyLottie({
  src,
  width,
  height,
  poster,
  posterAlt = '',
  className,
  loop = true,
}: Props) {
  const [data, setData] = useState<object | null>(null)
  const [playing, setPlaying] = useState(false)

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

  return (
    <div className={className} style={{ ...reserved, position: 'relative' }}>
      {poster ? (
        <img
          src={poster}
          alt={posterAlt}
          aria-hidden={posterAlt ? undefined : true}
          width={width}
          height={height}
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500"
          style={{ opacity: playing ? 0 : 1 }}
        />
      ) : null}

      {data ? (
        <Suspense fallback={null}>
          <Lottie
            animationData={data}
            loop={loop}
            onDOMLoaded={() => setPlaying(true)}
            className="relative h-full w-full"
          />
        </Suspense>
      ) : null}
    </div>
  )
}
