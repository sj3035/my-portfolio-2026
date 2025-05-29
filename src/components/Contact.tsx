
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:sjayanth2004@gmail.com" className="text-lg">
                sjayanth2004@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-300">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-lg">+91 9843296163</span>
            </div>
            
            <div className="flex items-center space-x-4 text-slate-300">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg">
                House No. 1, 20th Street, NIT Quarters, NIT Tiruchirappalli - 620015
              </span>
            </div>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full p-4 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full p-4 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-4 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
