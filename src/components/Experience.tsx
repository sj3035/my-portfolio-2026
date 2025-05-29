
const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Data Science & Analytics Intern
              </h3>
              <p className="text-xl text-blue-400 font-medium">Innovate Intern</p>
            </div>
            <div className="text-slate-400 mt-2 md:mt-0">
              <p>Chennai, India</p>
              <p>September 2024 - October 2024</p>
            </div>
          </div>
          
          <div className="space-y-4 text-slate-300">
            <p className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Collaborated with the developer team to design reliable technological solutions
            </p>
            <p className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Contributed to the development and deployment of modern applications
            </p>
            <p className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Participated in troubleshooting and problem-solving related to data science and analytics
            </p>
            <p className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Stayed updated on emerging trends and best practices in data science and analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
