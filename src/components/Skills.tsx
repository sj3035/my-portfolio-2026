
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Certifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">AWS Academy Graduate - AWS Academy Cloud Foundations</span>
              <span className="text-blue-600 font-medium">Amazon Web Services</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <span className="font-medium text-slate-700">Google AI Essentials</span>
              <span className="text-blue-600 font-medium">Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
