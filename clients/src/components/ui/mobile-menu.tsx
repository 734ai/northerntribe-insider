import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Heart, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  currentLocation: string;
}

const MobileMenu = ({ isOpen, onClose, navigation, currentLocation }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col space-y-4">
            {navigation.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = currentLocation === item.href;
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  <Link href={item.href}>
                    <div 
                      className={`flex items-center space-x-2 transition-colors duration-200 cursor-pointer ${
                        isActive 
                          ? "text-cyan-green" 
                          : "text-gray-400 hover:text-cyber-green"
                      }`}
                      onClick={onClose}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: navigation.length * 0.1,
                ease: "easeOut" 
              }}
            >
              <Link href="/donation">
                <Button 
                  className="bg-cyber-green text-black hover:bg-green-400 transition-colors duration-200 flex items-center space-x-2 font-medium w-fit"
                  onClick={onClose}
                >
                  <Heart className="w-4 h-4" />
                  <span>Donation</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
