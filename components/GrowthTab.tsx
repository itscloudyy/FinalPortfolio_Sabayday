export default function GrowthTab() {
  const currentlyLearning = [
    {
      title: "Advanced React Patterns",
      description: "Exploring React Server Components, concurrent rendering, and optimization techniques.",
      progress: 75
    },
    {
      title: "TypeScript Advanced Types",
      description: "Deep diving into generics, mapped types, and advanced type inference.",
      progress: 85
    },
    {
      title: "Web Performance Optimization",
      description: "Learning about Core Web Vitals, lazy loading, and performance monitoring.",
      progress: 65
    },
    {
      title: "GraphQL & API Design",
      description: "Mastering GraphQL queries, mutations, and building scalable APIs.",
      progress: 70
    }
  ];

  return (
    <section id="growth" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Currently <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Demonstrating a growth mindset and commitment to continuous improvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 border border-slate-600 hover:border-amber-500 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.description}</p>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-300">Progress</span>
                  <span className="text-sm font-bold text-amber-400">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-orange-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">🚀</span>
            Growth Mindset
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I believe in continuous learning and growth. Every project is an opportunity to expand my skills and tackle new challenges. 
            By staying curious and dedicating time to learning new technologies, I ensure I remain at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
}
