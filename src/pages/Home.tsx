import { motion } from 'motion/react';
///import { Zap, Shield, Clock, Award, ArrowRight, Users, Target, CheckCircle2, ChevronRight, Pencil, FileCheck, UserCheck } from 'lucide-react'///
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/reqimages/surge.mp4" type="video/mp4" />
            {/* Fallback image if video fails or path is wrong */}
            <img 
              src="/reqimages/Picture1.jpg" 
              alt="Electrical work" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-ultramarine/80 to-transparent" />
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering Oman's <span className="text-blue-400">Future</span> with Excellence
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              From residential wiring to large-scale industrial projects, we deliver safe, efficient, and innovative electrical solutions across the Sultanate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-white hover:bg-slate-100 text-ultramarine px-8 py-4 text-lg rounded-full transition-all font-medium">
                Our Services
              </Link>
              <Link to="/why-choose-us" className="bg-white hover:bg-slate-100 text-ultramarine px-8 py-4 text-lg rounded-full transition-all font-medium">
                Why Choose Us?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home;
