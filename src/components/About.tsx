
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Passionate Computer Science and Engineering student at SRM Institute of Science and Technology
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Strong focus on data science and analytics with a CGPA of 9.28
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Dedicated to excellence in both academics and practical applications
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Data Science & Analytics Intern at Innovate, collaborating with developer teams
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Contributing to reliable technological solutions and modern application development
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Always eager to learn emerging trends and best practices in the field
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-300">Computer Science and Engineering</h4>
                <p className="text-slate-300">SRM Institute of Science and Technology</p>
                <p className="text-slate-400">CGPA: 9.28 | Jun 2022 - May 2026</p>
                <p className="text-slate-400">Tiruchirappalli, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
