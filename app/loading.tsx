export default function Loading() {
  return (
    <main className="min-h-screen bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        {/* Hero skeleton */}
        <section className="text-center py-16 max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <div className="h-8 w-64 rounded-full bg-white/5 border border-white/10 animate-pulse" />
          </div>

          <div className="space-y-3">
            <div className="h-12 w-full max-w-2xl mx-auto rounded-lg bg-white/5 animate-pulse" />
            <div className="h-12 w-3/4 max-w-xl mx-auto rounded-lg bg-white/5 animate-pulse" />
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="h-5 w-full rounded bg-white/5 animate-pulse" />
            <div className="h-5 w-5/6 mx-auto rounded bg-white/5 animate-pulse" />
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <div className="h-11 w-32 rounded-lg bg-cyan-500/20 animate-pulse" />
            <div className="h-11 w-36 rounded-lg bg-white/5 border border-white/10 animate-pulse" />
          </div>
        </section>

        {/* Projects section skeleton */}
        <section className="pt-12">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="h-8 w-48 rounded bg-white/5 animate-pulse" />
            <div className="h-4 w-20 rounded bg-white/5 animate-pulse" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4 animate-pulse"
              >
                <div className="h-40 rounded-lg bg-white/5" />
                <div className="h-6 w-2/3 rounded bg-white/5" />
                <div className="h-4 w-full rounded bg-white/5" />
                <div className="h-4 w-5/6 rounded bg-white/5" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}