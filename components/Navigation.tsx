export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              JS Portfolio
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">
              Projects
            </a>
            <a href="#growth" className="text-gray-300 hover:text-white transition">
              Learning
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
