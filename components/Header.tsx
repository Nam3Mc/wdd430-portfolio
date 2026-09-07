import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/60 backdrop-blur-md transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Logo / Nombre con detalle estilo Web3 */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-gray-100 hover:text-cyan-400 transition-colors"
        >
          <span className="text-cyan-400 font-mono text-sm group-hover:rotate-90 transition-transform duration-300">&lt;/&gt;</span>
          <span>Dreiser Morales</span>
        </Link>

        {/* Navegación Minimalista */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-mono">
            <li>
              <Link 
                href="/" 
                className="text-gray-400 hover:text-cyan-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                // home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-400 hover:text-cyan-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                // about
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}