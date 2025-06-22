import { motion } from "framer-motion";
import { User, Shield, Brain, Target, Github, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    "Malware Analysis",
    "Reverse Engineering",
    "Threat Intelligence",
    "Network Security",
    "AI/ML Security",
    "Incident Response",
    "Vulnerability Research",
    "Digital Forensics"
  ];

  const experience = [
    {
      role: "Senior Security Researcher",
      organization: "NorthernTribe Security",
      period: "2020 - Present",
      description: "Leading advanced threat research and malware analysis initiatives."
    },
    {
      role: "Threat Intelligence Analyst",
      organization: "CyberDefense Corp",
      period: "2018 - 2020",
      description: "Analyzed APT campaigns and developed threat attribution methodologies."
    },
    {
      role: "Security Consultant",
      organization: "Independent",
      period: "2016 - 2018",
      description: "Provided security assessments and incident response services."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <User className="w-12 h-12 text-cyber-green" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              About Me
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Cybersecurity researcher and threat intelligence analyst with over 8 years of experience 
            in malware analysis, reverse engineering, and advanced threat detection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-card-bg border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-cyber-green" />
                    <h3 className="text-xl font-bold text-white">Background</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in analyzing advanced persistent threats, nation-state cyber campaigns, 
                    and emerging attack vectors. My work focuses on understanding adversary tactics, 
                    techniques, and procedures to help organizations build more effective defenses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-card-bg border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-6 h-6 text-cyber-green" />
                    <h3 className="text-xl font-bold text-white">Expertise</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="bg-black border border-gray-700 rounded px-3 py-2 text-sm text-center"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-card-bg border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-cyber-green" />
                    <h3 className="text-xl font-bold text-white">Connect</h3>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-gray-600 hover:border-cyber-green hover:text-cyber-green">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:border-cyber-green hover:text-cyber-green">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:border-cyber-green hover:text-cyber-green">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-card-bg border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-6 h-6 text-cyber-green" />
                    <h3 className="text-xl font-bold text-white">Experience</h3>
                  </div>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={exp.role}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        className="border-l-2 border-cyber-green pl-4"
                      >
                        <h4 className="font-semibold text-white">{exp.role}</h4>
                        <p className="text-cyber-green text-sm">{exp.organization}</p>
                        <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                        <p className="text-gray-300 text-sm">{exp.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-card-bg to-gray-900 border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                "To advance cybersecurity knowledge through rigorous research, responsible disclosure, 
                and education. By understanding our adversaries and their methods, we can build a more 
                secure digital future for everyone."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
