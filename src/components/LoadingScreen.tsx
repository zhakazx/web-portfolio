import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const duration = 2000 // 2 seconds total loading time
    const interval = 20 // Update every 20ms
    const steps = duration / interval
    const increment = 100 / steps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          // Wait a bit before fading out
          setTimeout(() => setIsLoading(false), 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-background transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={progress >= 100}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="size-32 flex items-center justify-center">
          <img
            src="./mona-loading.gif"
            alt="Loading..."
            className="size-full object-contain animate-fade-in"
          />
        </div>

        <div
          className="w-64 h-6 bg-neutral-300 border-4 border-foreground relative"
          style={{ imageRendering: 'pixelated' }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-foreground transition-all duration-200 ease-out"
            style={{
              width: `${progress}%`,
              imageRendering: 'pixelated',
            }}
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-1 bg-background/50" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  )
}
