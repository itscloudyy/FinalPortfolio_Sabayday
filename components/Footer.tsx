export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Me</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate Frontend Developer dedicated to creating accessible and performant web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#growth" className="text-gray-400 hover:text-cyan-400 transition">
                  Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition">
                  GitHub
                </a>
              </p>
              <p>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="mailto:hello@example.com" className="text-gray-400 hover:text-cyan-400 transition">
                  Email
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} Johnwel Sabayday. All rights reserved.</p>
            <p>
              Built with <span className="text-cyan-400">Next.js</span> • Styled with <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
