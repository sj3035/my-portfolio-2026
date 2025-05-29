
const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                Data Science & Analytics Intern
              </h3>
              <p className="text-xl text-blue-600 font-medium">Innovate Intern</p>
            </div>
            <div className="text-slate-500 mt-2 md:mt-0">
              <p>Chennai, India</p>
              <p>September 2024 - October 2024</p>
            </div>
          </div>
          
          <div className="space-y-4 text-slate-600">
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
