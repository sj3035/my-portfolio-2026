
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python"]
    },
    {
      title: "Libraries/Frameworks",
      skills: ["JavaScript", "Canva", "Photoshop"]
    },
    {
      title: "Tools/Platforms",
      skills: ["VS Code", "Jupyter", "Microsoft Office"]
    },
    {
      title: "Databases",
      skills: ["SQL", "PostgreSQL", "Firebase"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Certifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <span className="font-medium text-slate-300">AWS Academy Graduate - AWS Academy Cloud Foundations</span>
              <span className="text-blue-400 font-medium">Amazon Web Services</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <span className="font-medium text-slate-300">Google AI Essentials</span>
              <span className="text-blue-400 font-medium">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
