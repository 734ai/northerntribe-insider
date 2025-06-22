import { motion } from "framer-motion";
import { Cpu, Code, FileText, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ReverseEngineering = () => {
  const projects = [
    {
      title: "Malware Family Analysis: Stuxnet Deep Dive",
      description: "Comprehensive reverse engineering analysis of the Stuxnet worm, including disassembly, behavior analysis, and attribution techniques.",
      tags: ["Malware", "SCADA", "Nation-State", "ICS"],
      difficulty: "Advanced",
      language: "Assembly/C"
    },
    {
      title: "APT Toolkit Deconstruction",
      description: "Breaking down advanced persistent threat toolkits used in recent campaigns, focusing on evasion techniques and persistence mechanisms.",
      tags: ["APT", "Persistence", "Evasion", "Windows"],
      difficulty: "Expert",
      language: "Multiple"
    },
    {
      title: "IoT Firmware Analysis Framework",
      description: "Developing methodologies for analyzing IoT device firmware, including bootloader analysis and security vulnerability identification.",
      tags: ["IoT", "Firmware", "ARM", "Bootloader"],
      difficulty: "Intermediate",
      language: "ARM Assembly"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Expert':
        return 'bg-threat-red';
      case 'Advanced':
        return 'bg-warning-yellow text-black';
      case 'Intermediate':
        return 'bg-cyber-green text-black';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Cpu className="w-12 h-12 text-cyber-green" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Reverse Engineering
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep technical analysis of malware, exploits, and advanced threats. 
            Understanding how attacks work at the lowest level to build better defenses.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <Card className="bg-card-bg border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                    <Badge className={`${getDifficultyColor(project.difficulty)} font-medium`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Code className="w-4 h-4" />
                      <span>{project.language}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <Card className="bg-card-bg border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-cyber-green" />
                <h3 className="text-xl font-bold text-white">Resources</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Disassembly Tools & Techniques</li>
                <li>• Malware Analysis Frameworks</li>
                <li>• Static & Dynamic Analysis Methods</li>
                <li>• Debugger Usage & Exploitation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card-bg border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GitBranch className="w-6 h-6 text-cyber-green" />
                <h3 className="text-xl font-bold text-white">Methodologies</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Behavioral Analysis Techniques</li>
                <li>• Code Flow & Control Structure Analysis</li>
                <li>• Cryptographic Algorithm Identification</li>
                <li>• Attribution & Fingerprinting Methods</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ReverseEngineering;
