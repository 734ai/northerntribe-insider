import { motion } from "framer-motion";
import { Shield, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="bg-dark-bg border-t border-gray-800 py-12 px-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-cyber-green" />
              <span className="text-xl font-bold text-white">NorthernTribe Insider</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted source for cybersecurity intelligence, threat analysis, and AI research insights. 
              Stay ahead of emerging threats with expert analysis and cutting-edge research.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyber-green transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  APT Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  Malware Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  Zero-Day Research
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  AI Security
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  Threat Database
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  IOC Feed
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors duration-200">
                  Tools & Scripts
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">© 2024 NorthernTribe Insider. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cyber-green text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-cyber-green text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-cyber-green text-sm transition-colors duration-200">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
