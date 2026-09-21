import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export default async function OpenSourcePage() {
  const projects = await getProjects('opensource');

  return (
    <main className="min-h-screen bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        <section className="pt-12">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">//</span>
              Open-Source Projects
            </h2>
            <span className="text-xs font-mono text-gray-500">SHOWCASE</span>
          </div>

          <ProjectList projects={projects} />
        </section>
      </div>
    </main>
  );
}