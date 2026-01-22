export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Johnwel Sabayday
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-semibold">
          Frontend Developer
        </p>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">
          I am a Frontend Developer passionate about building accessible and user-centric web applications. 
          I create responsive, interactive experiences using modern technologies like Next.js and React.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://github.com" className="hover:text-cyan-400 transition text-2xl">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-cyan-400 transition text-2xl">
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="hover:text-cyan-400 transition text-2xl">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
