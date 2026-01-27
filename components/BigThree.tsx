'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'learned' | 'aspiring' | 'know';
  technologies: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Analog Clock",
    description: "A fully functional analog clock application built with Python's Tkinter library, featuring real-time updates and customizable themes.",
    category: "learned",
    technologies: ["Python"],
    link: "https://github.com/itscloudyy/AnalogClockPython.git",
    image: "/analog-clock.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates. Built with React and Firebase for seamless team collaboration.",
    category: "know",
    technologies: ["React", "Firebase", "Redux", "CSS Modules"],
    link: "https://github.com",
    image: "/task-management.jpg"
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Currently building an AI-powered chat application to explore machine learning integration with web applications.",
    category: "aspiring",
    technologies: ["Next.js", "OpenAI API", "WebSockets", "AI/ML"],
    link: "https://github.com",
    image: "/ai-chat.jpg"
  },
];

export default function BigThree() {
  const [activeCategory, setActiveCategory] = useState<'learned' | 'aspiring' | 'know' | 'all'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'learned':
        return 'from-green-500 to-emerald-500';
      case 'know':
        return 'from-blue-500 to-cyan-500';
      case 'aspiring':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'learned':
        return 'What I Learned';
      case 'know':
        return 'What I Know';
      case 'aspiring':
        return 'What I\'m Aspiring To Know';
      default:
        return 'All Projects';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Big Three</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Select a category to see projects that demonstrate my growth and expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'learned', 'know', 'aspiring'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {cat === 'all' ? 'All Projects' : getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-slate-600 hover:border-cyan-500"
            >
              <div className={`h-40 bg-gradient-to-r ${getCategoryColor(project.category)} flex items-center justify-center overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-600 px-3 py-1 rounded-full text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.link}
                  className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
