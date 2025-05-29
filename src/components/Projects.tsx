
const Projects = () => {
  const projects = [
    {
      title: "OptiGo: Autonomous Wheelchair for Elderly and Visually Impaired",
      technologies: "Python, Intel RealSense, Arduino, Google Speech-to-Text API, ESP8266, Arduino IDE",
      description: "An innovative mobility solution providing autonomous navigation with real-time sensing, voice control, and IoT monitoring for improved safety and mobility.",
      features: [
        "Obstacle Detection: Uses Intel RealSense and PCL for dynamic obstacle avoidance",
        "Voice Navigation: Integrated Google Speech-to-Text for command recognition",
        "IoT Connectivity: Remote control and monitoring via ESP8266",
        "Safety: Infrared sensors for emergency stops and manual override for fail-safes"
      ]
    },
    {
      title: "SonoSync: Intelligent Traffic Optimization System for Hairpin Bends",
      technologies: "Python, Arduino, AWS IoT Core, DHT11, Machine Learning",
      description: "An IoT-based traffic management system using sensors and ML to manage traffic dynamically, enhancing safety and flow on hairpin bends.",
      features: [
        "IoT Sensors: Ultrasonic and weather sensors for real-time data collection",
        "Data Processing: AWS IoT Core for data aggregation and analysis",
        "ML Models: RNN for congestion prediction and reinforcement learning for signal control",
        "Safety: Blind spot alerts and incident detection for enhanced road safety"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{project.technologies}</p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-700 mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <p className="text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
