import Link from 'next/link';

export default function Footer() {  
  return (
    <footer className="w-full border-t border-white/10 bg-gray-950/60 backdrop-blur-md py-8 mt-20 text-sm font-mono text-gray-400">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright & Info */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p>
            &copy; {new Date().getFullYear()} Dreiser Morales <span className="text-gray-600">|</span> All systems operational
          </p>
        </div>

        {/* Links Sociales & Redes */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            github
          </a>
          <a 
            href="https://linkedin.com/in/your-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors"
          >
            linkedin
          </a>
          <Link 
            href="/about" 
            className="hover:text-cyan-400 transition-colors"
          >
            about
          </Link>
        </div>

      </div>
    </footer>
  );
}