import { Suspense } from 'react';
import ProjectSearch from '@/components/ProjectSearch';
import ProjectList from '@/components/ProjectList';
import Pagination from '@/components/Pagination';
import { getFilteredProjects, getProjectsPages } from '@/lib/projects-db';

export default async function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await getFilteredProjects(query, currentPage);
  const totalPages = await getProjectsPages(query);

  return (
    <main className="min-h-screen bg-grid-pattern relative overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        <section className="pt-12">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">//</span>
              All Projects
            </h2>
            <span className="text-xs font-mono text-gray-500">SEARCH &amp; BROWSE</span>
          </div>

          {/* Search input */}
          <div className="mb-8 max-w-md">
            <ProjectSearch placeholder="Search by title, description, or tech..." />
          </div>

          {/* Keyed Suspense so the skeleton reappears when query/page changes */}
          <Suspense
            key={query + currentPage}
            fallback={<ProjectListSkeleton />}
          >
            <ProjectList projects={projects} />
          </Suspense>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-5 flex w-full justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function ProjectListSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4 animate-pulse"
        >
          <div className="h-6 w-2/3 rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-white/5" />
        </div>
      ))}
    </div>
  );
}