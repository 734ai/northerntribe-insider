import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Bell, 
  Target, 
  ArrowRight, 
  Eye, 
  MessageCircle, 
  ExternalLink, 
  Bookmark,
  Brain,
  Activity,
  TrendingUp,
  Zap,
  Shield,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { threatReports, aiInsights, liveFeedItems } from "@/data/content";

const Home = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter",
    });
    setEmail("");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-threat-red';
      case 'HIGH':
        return 'bg-yellow-600';
      case 'MEDIUM':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Trending':
        return <TrendingUp className="w-3 h-3" />;
      case 'Breaking':
        return <Zap className="w-3 h-3" />;
      case 'Research':
        return <Shield className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getFeedSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-threat-red';
      case 'warning':
        return 'bg-yellow-500';
      case 'success':
        return 'bg-cyber-green';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cyber Espionage & AI Insights
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dive deep into the heart of technology with NorthernTribe Insider. Stay ahead with the latest in{" "}
              <span className="text-threat-red font-medium">Cyber Espionage threats</span>,{" "}
              <span className="text-cyber-green font-medium">AI advancements</span>,{" "}
              <span className="text-warning-yellow font-medium">Data breaches</span> and{" "}
              <span className="text-info-blue font-medium">Malware analysis</span>.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From uncovering state-sponsored cyber campaigns to analyzing APT groups, we bring you the essential insights 
              to keep you informed and secure. Whether you're a tech professional or an enthusiast, NTcsr offers the 
              knowledge you need to navigate the evolving landscape of cyber espionage and cybersecurity with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-cyber-green text-black px-8 py-3 font-semibold hover:bg-green-400 transition-colors duration-200 flex items-center justify-center space-x-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Start Reading</span>
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-white px-8 py-3 font-semibold hover:border-cyber-green hover:text-cyber-green transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Bell className="w-5 h-5" />
                <span>Get Alerts</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Featured Insights */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white flex items-center space-x-2">
                  <Target className="w-8 h-8 text-threat-red" />
                  <span>Latest Threat Reports</span>
                </h2>
                <a href="#" className="text-cyber-green hover:text-green-400 transition-colors duration-200 flex items-center space-x-1">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-6">
                {threatReports.map((report, index) => (
                  <motion.article
                    key={report.id}
                    className="bg-card-bg border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className={`${getSeverityColor(report.severity)} text-white text-xs px-2 py-1 rounded font-medium`}>
                          {report.severity}
                        </span>
                        <span className="text-gray-400 text-sm">{report.timeAgo}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyber-green transition-colors duration-200 cursor-pointer">
                      {report.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {report.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-400 flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{report.views.toLocaleString()}</span>
                        </span>
                        <span className="text-sm text-gray-400 flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{report.comments}</span>
                        </span>
                      </div>
                      <a href="#" className="text-cyber-green hover:text-green-400 transition-colors duration-200 flex items-center space-x-1">
                        <span>Read More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Right Column: AI Insights & Quick Updates */}
            <div className="lg:col-span-1">
              {/* AI Research Section */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-cyber-green" />
                  <span>AI Research</span>
                </h3>
                
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <motion.div
                      key={insight.id}
                      className="bg-card-bg border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors duration-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      <h4 className="font-semibold text-white mb-2 hover:text-cyber-green transition-colors duration-200 cursor-pointer">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{insight.timeAgo}</span>
                        <span className="flex items-center space-x-1">
                          {getStatusIcon(insight.status)}
                          <span>{insight.status}</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Threat Intelligence Feed */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Activity className="w-6 h-6 text-threat-red" />
                  <span>Live Feed</span>
                </h3>
                
                <div className="space-y-3">
                  {liveFeedItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 bg-card-bg border border-gray-800 rounded-lg"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <div className={`w-2 h-2 ${getFeedSeverityColor(item.severity)} rounded-full animate-pulse-slow`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-300">{item.message}</p>
                        <p className="text-xs text-gray-500">{item.timeAgo}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="bg-gradient-to-r from-card-bg to-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-cyber-green" />
                      <span>Stay Updated</span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Get daily briefings on the latest cybersecurity threats and AI developments.
                    </p>
                    <form onSubmit={handleNewsletterSignup} className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black border-gray-700 text-white placeholder-gray-500 focus:border-cyber-green"
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-cyber-green text-black font-semibold hover:bg-green-400 transition-colors duration-200"
                      >
                        Subscribe Now
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
