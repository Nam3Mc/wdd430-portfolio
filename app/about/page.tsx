import TechStack from "@/components/TechStack";

const stackData = [
  {
    category: "Frontend & UI",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    category: "AI & Web3 Focus",
    skills: ["OpenAI API", "Smart Contracts", "Web3 Integration", "Automation"],
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-16 relative z-10 space-y-12">
        
        {/* Main Header */}
        <section className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            System.Profile // Initialized
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Dreiser Morales
          </h1>

          <p className="text-xl font-mono text-cyan-400/90 flex items-center gap-2">
            <span className="text-gray-500">&gt;</span> Full-Stack Software Developer
          </p>
        </section>

        {/* Story / Journey Card */}
        <section className="p-8 rounded-2xl bg-gray-950/40 border border-white/10 backdrop-blur-md space-y-6 relative group hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
            <span className="text-cyan-400">//</span> Background & Journey
          </div>

          <p className="text-gray-300 leading-relaxed font-light text-lg">
            Since my childhood, I have been fascinated by computers and the possibilities within the field. 
            I remember playing online games with friends—I was so passionate about them that I discovered how to build 
            my own servers and experiment with hosting. Although I did not code the games themselves, setting up and 
            managing servers allowed us to connect and play together, sparking my deep interest in computer systems.
          </p>

          <p className="text-gray-300 leading-relaxed font-light text-lg">
            Over time, that curiosity evolved into a clear career path. I enrolled in <strong className="text-cyan-300 font-normal">BYU Pathway</strong> and subsequently in <strong className="text-cyan-300 font-normal">BYU-Idaho</strong> to pursue my degree in Software Development. To accelerate my practical skillset, I also completed an intensive Full-Stack certification at <strong className="text-cyan-300 font-normal">Henry Academy</strong>, where I built real-world applications and collaborated with multi-disciplinary teams.
          </p>

          <p className="text-gray-300 leading-relaxed font-light text-lg border-l-2 border-cyan-400 pl-4 py-1 italic bg-cyan-950/20 rounded-r-lg">
            Today, I bring a solid mix of engineering principles, problem-solving skills, and a forward-looking interest in AI automation and Web3 architectures.
          </p>
        </section>

        {/* Education Section */}
        <section className="p-6 rounded-xl bg-gray-950/40 border border-white/10 backdrop-blur-md space-y-4">
          <h2 className="text-lg font-bold font-mono text-gray-200 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Education & Credentials
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400 font-light">
            <div className="flex flex-col p-3 rounded-lg bg-white/5 border border-white/5">
              <span className="text-gray-200 font-medium">B.S. in Software Development</span>
              <span className="text-xs font-mono text-cyan-400/80 mt-1">BYU-Idaho / BYU Pathway</span>
            </div>
            <div className="flex flex-col p-3 rounded-lg bg-white/5 border border-white/5">
              <span className="text-gray-200 font-medium">Full-Stack Web Developer Certification</span>
              <span className="text-xs font-mono text-cyan-400/80 mt-1">Henry Academy</span>
            </div>
          </div>
        </section>

        {/* Custom Server Component Section */}
        <TechStack categories={stackData} statusMessage="Production Ready" />

      </div>
    </main>
  );
}