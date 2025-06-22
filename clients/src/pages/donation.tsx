import { motion } from "framer-motion";
import { Heart, Shield, Coffee, Server, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Donation = () => {
  const supportOptions = [
    {
      icon: Coffee,
      title: "Buy Me a Coffee",
      amount: "$5",
      description: "Support daily research with a small contribution",
      color: "bg-yellow-600"
    },
    {
      icon: Book,
      title: "Research Fund",
      amount: "$25",
      description: "Help fund new security research projects",
      color: "bg-blue-600"
    },
    {
      icon: Server,
      title: "Infrastructure",
      amount: "$50",
      description: "Support hosting and analysis infrastructure",
      color: "bg-cyber-green text-black"
    },
    {
      icon: Shield,
      title: "Premium Supporter",
      amount: "$100",
      description: "Full support for all research activities",
      color: "bg-threat-red"
    }
  ];

  const usageAreas = [
    "Malware analysis lab equipment and software licenses",
    "Threat intelligence data feeds and research tools",
    "Cloud infrastructure for analysis and hosting",
    "Security conference attendance and training",
    "Open source tool development and maintenance"
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
            <Heart className="w-12 h-12 text-cyber-green" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Support Our Work
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your support helps maintain independent cybersecurity research, 
            develop new analysis tools, and share critical threat intelligence with the community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="bg-card-bg border-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Why Support NorthernTribe Insider?
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Independent cybersecurity research requires significant resources. Your donations help us maintain 
                cutting-edge analysis capabilities, purchase specialized tools, and dedicate time to producing 
                high-quality threat intelligence that benefits the entire security community.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <Card className="bg-card-bg border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <option.icon className="w-6 h-6 text-cyber-green" />
                    <span className="text-white">{option.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyber-green">{option.amount}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <Button className={`w-full ${option.color} font-semibold transition-colors duration-200`}>
                    <Heart className="w-4 h-4 mr-2" />
                    Support Now
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
          className="mb-12"
        >
          <Card className="bg-card-bg border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-center">How Your Donations Are Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {usageAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                    <span className="text-gray-300">{area}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-card-bg to-gray-900 border-gray-800">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Alternative Ways to Support</h3>
              <p className="text-gray-300 mb-6">
                Can't donate? You can still help by sharing our research, contributing to discussions, 
                or reporting security issues through responsible disclosure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-gray-600 hover:border-cyber-green hover:text-cyber-green">
                  Share Our Work
                </Button>
                <Button variant="outline" className="border-gray-600 hover:border-cyber-green hover:text-cyber-green">
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Donation;
