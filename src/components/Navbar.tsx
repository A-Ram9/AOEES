import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Zap, Award, Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dropdownItems = [
  { name: 'View Services', path: '/services', icon: <Zap className="w-4 h-4" /> },
  { name: 'View Completed Works', path: '/completed-works', icon: <Award className="w-4 h-4" /> },
  { name: 'View Ongoing Works', path: '/ongoing-works', icon: <Clock className="w-4 h-4" /> },
];
const ThunderHover = ({ children, active }: { children: React.ReactNode, active?: boolean }) => (
  <motion.div
    whileHover="hover"
    className="relative px-3 py-2 rounded-lg group overflow-hidden"
  >
    {/* Thunder Animation Overlay */}
    <motion.div
      variants={{
        hover: { opacity: 1 }
      }}
      initial={{ opacity: 0 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      {/* Lightning Bolt */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full text-yellow-400/30"
        variants={{
          hover: {
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatDelay: 0.5
            }
          }
        }}
      >
        <motion.path
          d="M50 0 L30 40 L60 40 L40 100 L70 50 L40 50 L60 0 Z"
          fill="currentColor"
        />
      </motion.svg>
      
      {/* Flash Effect */}
      <motion.div
        className="absolute inset-0 bg-yellow-400/5"
        variants={{
          hover: {
            opacity: [0, 1, 0],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 1
            }
          }
        }}
      />
    </motion.div>
    <div className="relative z-10">
      {children}
    </div>
    {active && (
      <motion.div 
        layoutId="nav-active"
        className="absolute bottom-0 left-0 w-full h-0.5 bg-ultramarine"
      />
    )}
  </motion.div>
);
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Clients', path: '/clients' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <img 
                  src="/reqimages/logo.jpg" 
                  alt="AOEES Logo" 
                  className="w-8 h-8 object-contain "
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-ultramarine leading-none">AOEES</span>
                <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase font-semibold">Electrical Contracting</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <ThunderHover active={location.pathname === '/'}>
                <span className={cn("text-sm font-medium transition-colors", location.pathname === '/' ? "text-ultramarine" : "text-slate-600")}>Home</span>
              </ThunderHover>
            </Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <ThunderHover active={['/services', '/completed-works', '/ongoing-works'].includes(location.pathname)}>
                <button className={cn("flex items-center gap-1 text-sm font-medium transition-colors", ['/services', '/completed-works', '/ongoing-works'].includes(location.pathname) ? "text-ultramarine" : "text-slate-600")}>
                  Services <ChevronDown className="w-4 h-4" />
                </button>
              </ThunderHover>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl border border-slate-100 rounded-xl py-2 mt-2"
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-ultramarine transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="bg-slate-50 p-1.5 rounded-lg group-hover:bg-white transition-colors">
                          {item.icon}
                        </div>
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path} 
              >
                <ThunderHover active={location.pathname === link.path}>
                  <span className={cn("text-sm font-medium transition-colors", location.pathname === link.path ? "text-ultramarine" : "text-slate-600")}>
                    {link.name}
                  </span>
                </ThunderHover>
              </Link>
            ))}
            
            <Link to="/contact" className="btn-primary ml-4">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-ultramarine" onClick={() => setIsOpen(false)}>Home</Link>
              <div className="px-3 py-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Services & Works</span>
                <div className="mt-2 space-y-1 pl-4 border-l-2 border-slate-100">
                  {dropdownItems.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className="flex items-center gap-2 py-2 text-sm text-slate-600 hover:text-ultramarine"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-ultramarine"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
