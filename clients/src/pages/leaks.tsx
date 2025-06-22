import { motion } from "framer-motion";
import { Eye, Calendar, AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Leaks = () => {
  const leaks = [
    {
      title: "Government Contractor Database Breach",
      date: "2024-01-15",
      severity: "Critical",
      description: "Sensitive government contractor information exposed, including security clearance data and project details.",
      affectedRecords: "2.3M",
      source: "Anonymous",
      verified: true
    },
    {
      title: "Healthcare Network Ransomware Data",
      date: "2024-01-10",
      severity: "High",
      description: "Patient records and medical data from major healthcare network leaked following ransomware attack.",
      affectedRecords: "850K",
      source: "Security Researcher",
      verified: true
    },
    {
      title: "Financial Services API Exposure",
      date: "2024-01-05",
      severity: "Medium",
      description: "Banking API credentials and transaction data accidentally exposed through misconfigured cloud storage.",
      affectedRecords: "1.2M",
      source: "Bug Bounty Hunter",
      verified: false
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-threat-red';
      case 'High':
        return 'bg-warning-yellow text-black';
      case 'Medium':
        return 'bg-blue-600';
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
            <Eye className="w-12 h-12 text-cyber-green" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Data Leaks & Breaches
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest intelligence on data breaches, leaks, and security incidents. 
            Tracking the most significant exposures affecting organizations and individuals worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-600 rounded-lg p-6 mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-threat-red" />
            <h3 className="text-xl font-bold text-threat-red">Responsible Disclosure</h3>
          </div>
          <p className="text-gray-300">
            All information presented here is based on publicly available sources or responsible disclosure practices. 
            We do not engage in or promote illegal activities. Data is presented for awareness and defense purposes only.
          </p>
        </motion.div>

        <div className="space-y-8">
          {leaks.map((leak, index) => (
            <motion.div
              key={leak.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <Card className="bg-card-bg border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-white text-xl mb-2">{leak.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getSeverityColor(leak.severity)} font-medium`}>
                        {leak.severity}
                      </Badge>
                      {leak.verified && (
                        <Badge className="bg-cyber-green text-black">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{leak.date}</span>
                    </div>
                    <span>Source: {leak.source}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{leak.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <span className="font-medium text-white">Affected Records:</span> {leak.affectedRecords}
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:border-cyber-green hover:text-cyber-green"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
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
              <Eye className="w-12 h-12 text-cyber-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Have Information?</h3>
              <p className="text-gray-300 mb-6">
                If you have information about a data breach or security incident, 
                we encourage responsible disclosure through proper channels.
              </p>
              <Button className="bg-cyber-green text-black hover:bg-green-400 transition-colors duration-200">
                Contact Securely
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaks;
