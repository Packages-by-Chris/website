"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted-foreground">An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            className="mt-4 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
