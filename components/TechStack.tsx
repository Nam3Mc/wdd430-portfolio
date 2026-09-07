interface SkillCategory {
  category: string;
  skills: string[];
}

interface TechStackProps {
  categories: SkillCategory[];
  statusMessage?: string;
}

export default function TechStack({ categories, statusMessage = "Stack Active" }: TechStackProps) {
  return (
    <section className="p-6 rounded-2xl bg-gray-950/40 border border-white/10 backdrop-blur-md space-y-6">
      
      {/* Header with System Status */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold font-mono text-gray-100 flex items-center gap-2">
          <span className="text-cyan-400">&gt;</span> Technical Stack
        </h2>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-full border border-cyan-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {statusMessage}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((item) => (
          <div key={item.category} className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 border-l-2 border-cyan-500/50 pl-2">
              {item.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-gray-200 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}