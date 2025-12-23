"use client";

export default function Header() {
  return (
    <header className="border-b border-objexis-cyan/30 bg-objexis-blue/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-objexis-cyan to-objexis-purple rounded-lg flex items-center justify-center font-display font-bold text-xl">
            O
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-wider text-objexis-cyan">
              OBJEXIS
            </h1>
            <p className="text-xs text-gray-400">Toy Vehicles of Tomorrow</p>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#designs" className="text-gray-300 hover:text-objexis-cyan transition-colors">
            Designs
          </a>
          <a href="#philosophy" className="text-gray-300 hover:text-objexis-cyan transition-colors">
            Philosophy
          </a>
          <a href="#agent" className="text-gray-300 hover:text-objexis-cyan transition-colors">
            AI Agent
          </a>
        </nav>
      </div>
    </header>
  );
}
