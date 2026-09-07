import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js app with AI-powered analytics for product and inventory management.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    link: 'https://github.com/your-username/project1'
  },
  {
    title: 'Decentralized Weather DApp',
    description: 'A Web3 application fetching weather data on-chain using smart contracts and oracle networks.',
    technologies: ['React', 'Solidity', 'Ethers.js', 'Tailwind CSS'],
    link: 'https://github.com/your-username/project2'
  }
];

export default function Home() { 
  return (
    <main className="min-h-screen bg-grid-pattern relative overflow-hidden">
      {/* Luz ambiental decorativa de fondo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-5xl">
        
        {/* Hero Section Minimalista */}
        <section className="text-center py-16 max-w-3xl mx-auto space-y-6">
          
          {/* Badge estilo AI/Web3 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 tracking-wide backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Building the Intelligent & Decentralized Web
          </div>

          {/* Título principal con Gradiente */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Building at the intersection of <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-500 bg-clip-text text-transparent">
              AI & Web3 Systems
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            I am a Full-Stack Developer creating next-generation web applications, combining smart automation, decentralized architectures, and modern user experiences.
          </p>

          {/* Botones de Acción (CTA) */}
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-medium text-sm transition-all duration-200 backdrop-blur-md"
            >
              GitHub Profile
            </a>
          </div>
        </section>

        {/* Sección de Proyectos */}
        <section id="projects" className="pt-12">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100 flex items-center gap-2">
              <span className="text-cyan-400 font-mono text-sm">//</span> Featured Projects
            </h2>
            <span className="text-xs font-mono text-gray-500">SHOWCASE</span>
          </div>

          <ProjectList projects={projects} />
        </section>

      </div>
    </main>
  );
}