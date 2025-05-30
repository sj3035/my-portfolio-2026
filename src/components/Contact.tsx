import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Get In Touch</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, and collaborations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-semibold text-white mb-8 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Personal Email</p>
                    <a href="mailto:sjayanth2004@gmail.com" className="text-lg font-medium">
                      sjayanth2004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Official Email</p>
                    <a href="mailto:sj3035@srmist.edu.in" className="text-lg font-medium">
                      sj3035@srmist.edu.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-slate-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <span className="text-lg font-medium">+91 9843296163</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 text-slate-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Address</p>
                    <span className="text-lg font-medium leading-relaxed">
                      House No. 1, 20th Street, NIT Quarters<br />
                      NIT Tiruchirappalli - 620015
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/sj3035" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700/30 to-gray-900/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <Github className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/s-jayanth-10859a266/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-700/30 to-blue-900/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                    <Linkedin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-semibold text-white mb-8 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 placeholder-slate-400 backdrop-blur-sm group-hover:bg-white/10"
                />
              </div>
              <div className="group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 placeholder-slate-400 backdrop-blur-sm group-hover:bg-white/10"
                />
              </div>
              <div className="group">
                <textarea 
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none placeholder-slate-400 backdrop-blur-sm group-hover:bg-white/10"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
