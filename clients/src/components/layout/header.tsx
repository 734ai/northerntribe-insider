import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Home, 
  Satellite, 
  Cpu, 
  Eye, 
  User, 
  Heart, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/mobile-menu";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { href: "/", label: "Home", icon: Home },
    { href: "/satellite-hacking", label: "Satellite Hacking Tools", icon: Satellite },
    { href: "/reverse-engineering", label: "Reverse Engineering", icon: Cpu },
    { href: "/leaks", label: "Leaks", icon: Eye },
    { href: "/about", label: "About Me", icon: User },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className="bg-dark-bg border-b border-gray-800 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Shield className="w-8 h-8 text-cyber-green" />
                <span className="text-xl font-bold text-white">
                  NorthernTribe Insider
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              const isActive = location === item.href;
              
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href}>
                    <div className={`flex items-center space-x-1 transition-colors duration-200 cursor-pointer ${
                      isActive 
                        ? "text-cyber-green" 
                        : "text-gray-400 hover:text-cyber-green"
                    }`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/donation">
                <Button className="bg-cyber-green text-black hover:bg-green-400 transition-colors duration-200 flex items-center space-x-1 font-medium">
                  <Heart className="w-4 h-4" />
                  <span>Donation</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigation={navigation}
          currentLocation={location}
        />
      </nav>
    </motion.header>
  );
};

export default Header;
