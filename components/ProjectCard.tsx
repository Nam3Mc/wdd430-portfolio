interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link
}: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gray-950/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]">
      
      {/* Resplandor superior derecho al pasar el cursor */}
      <div className="absolute top-0 right-0 -z-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Encabezado y Enlace */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold tracking-tight text-gray-100 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
              aria-label={`Ver proyecto ${title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
          {description}
        </p>
      </div>

      {/* Etiquetas de Tecnologías (Tags estilo consola/Web3) */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/30 text-cyan-300/90 border border-cyan-800/30 group-hover:border-cyan-500/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

    </article>
  );
}