import { motion } from "framer-motion";
import { Satellite, Download, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SatelliteHacking = () => {
  const tools = [
    {
      name: "SatTracker Pro",
      description: "Advanced satellite tracking and signal analysis tool for security researchers.",
      version: "v2.1.3",
      category: "Tracking",
      risk: "Medium"
    },
    {
      name: "RF Analyzer Suite",
      description: "Comprehensive radio frequency analysis toolkit for satellite communications.",
      version: "v1.8.0",
      category: "Analysis",
      risk: "High"
    },
    {
      name: "Orbital Predictor",
      description: "Predict satellite positions and communication windows with high accuracy.",
      version: "v3.0.1",
      category: "Prediction",
      risk: "Low"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High':
        return 'text-threat-red';
      case 'Medium':
        return 'text-warning-yellow';
      case 'Low':
        return 'text-cyber-green';
      default:
        return 'text-gray-400';
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
            <Satellite className="w-12 h-12 text-cyber-green" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Satellite Hacking Tools
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade tools for satellite communication analysis and security research. 
            Use responsibly and in accordance with local laws and regulations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-900/20 to-red-900/20 border border-yellow-600 rounded-lg p-6 mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-warning-yellow" />
            <h3 className="text-xl font-bold text-warning-yellow">Legal Disclaimer</h3>
          </div>
          <p className="text-gray-300">
            These tools are provided for educational and authorized security research purposes only. 
            Unauthorized access to satellite communications is illegal and may result in severe penalties. 
            Always ensure you have proper authorization before using these tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <Card className="bg-card-bg border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-white">{tool.name}</span>
                    <span className={`text-sm ${getRiskColor(tool.risk)}`}>
                      {tool.risk} Risk
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Version: {tool.version}</span>
                    <span className="text-sm text-cyber-green">{tool.category}</span>
                  </div>
                  <Button className="w-full bg-cyber-green text-black hover:bg-green-400 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Card className="bg-card-bg border-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Security Research Only</h3>
              <p className="text-gray-300">
                All tools are provided for legitimate security research and educational purposes. 
                We do not condone or support any illegal activities. Please use these tools responsibly 
                and ensure you have proper authorization for any testing activities.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SatelliteHacking;
