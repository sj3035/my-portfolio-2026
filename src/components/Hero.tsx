
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            S JAYANTH
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Computer Science Student at SRMIST
          </p>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            Data Science & Analytics Intern passionate about creating innovative technological solutions
            and solving complex problems through code.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={scrollToAbout}
              className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
            <a 
              href="mailto:sjayanth2004@gmail.com"
              className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="flex justify-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl transform rotate-3"></div>
            <img 
              src="/lovable-uploads/3ef76be9-9707-428d-b197-08b72624b93c.png"
              alt="S Jayanth"
              className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </button>
    </section>
  );
};

export default Hero;
