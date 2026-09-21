export default function Loading() {
  return (
    <main className="min-h-screen bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        <section className="pt-12">
          {/* Header skeleton */}
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="h-8 w-64 rounded bg-white/5 animate-pulse" />
            <div className="h-4 w-20 rounded bg-white/5 animate-pulse" />
          </div>

          {/* Project cards skeleton */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4 animate-pulse"
              >
                <div className="h-6 w-2/3 rounded bg-white/5" />
                <div className="h-4 w-full rounded bg-white/5" />
                <div className="h-4 w-5/6 rounded bg-white/5" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 rounded-full bg-white/5" />
                  <div className="h-6 w-20 rounded-full bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}