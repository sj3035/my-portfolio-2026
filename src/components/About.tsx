
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at SRM Institute of Science and Technology, 
              with a strong focus on data science and analytics. Currently maintaining a CGPA of 9.28, 
              I'm dedicated to excellence in both academics and practical applications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              As a Data Science & Analytics Intern at Innovate, I collaborate with developer teams to design 
              reliable technological solutions and contribute to modern application development. I'm always 
              eager to learn emerging trends and best practices in the field.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-700">Computer Science and Engineering</h4>
                <p className="text-slate-600">SRM Institute of Science and Technology</p>
                <p className="text-slate-500">CGPA: 9.28 | Jun 2022 - May 2026</p>
                <p className="text-slate-500">Tiruchirappalli, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
