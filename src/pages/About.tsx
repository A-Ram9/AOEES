import { motion } from 'motion/react';
import { Award, Users, Target, History, Zap } from 'lucide-react';


function About() {
  const cardVariants = {
    initial: { scale: 1, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 0 25px rgba(37, 99, 235, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const flashVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: [0, 0.8, 0, 1, 0],
      transition: { 
        duration: 0.4, 
        repeat: Infinity,
        repeatDelay: 1.5
      }
    }
  };

  const boltVariants = {
    initial: { pathLength: 0, opacity: 0 },
    hover: { 
      pathLength: [0, 1],
      opacity: [0, 1, 0],
      transition: { 
        duration: 0.3, 
        repeat: Infinity,
        repeatDelay: 1.2
      }
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Our Story</h1>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Abu Omran Electrical Engineering Services LLC, established in 1995 in the Sultanate of Oman by Chairman Mr. Ali Abbas , we specialize in electrical and associated civil works. The company has steadily grown as a leading renewable and electrical contracting firm, maintaining the highest standards of ethics, safety, and quality.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Celebrating 30 years of service with a total of 5000+ accomplished project, Abu Omran has earned the trust of government agencies and private clients through consistent delivery, reliability, and excellence.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed"> Registered with the Ministry of Commerce and Industry as a First Grade Contractor, the DCRP as a Grade B Electrical Contractor and Solar S1 certified Installer, and the Tender Board as an Excellent Contractor, the company undertakes both government and private sector projects.

            </p>
           
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Today, we are a team of over 50 dedicated professionals, including certified engineers and master technicians, all committed to the highest levels of safety and quality.
            </p>           
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-ultramarine" />
                </div>
                <span className="font-bold text-slate-800">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-ultramarine" />
                </div>
                <span className="font-bold text-slate-800">Expert Team</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              alt="Team at work" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-ultramarine text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">30+</div>
              <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem]">
            <Target className="w-12 h-12 text-blue-400 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To provide safe, reliable, and innovative electrical solutions that empower our clients and contribute to the sustainable growth of Oman's infrastructure.
            </p>
          </div>
          <div className="bg-ultramarine text-white p-12 rounded-[3rem]">
            <History className="w-12 h-12 text-blue-200 mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To be the leading electrical contracting firm in the GCC region, recognized for our technical expertise, safety record, and commitment to excellence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Integrity', 'Safety', 'Innovation', 'Excellence'].map((value, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="relative p-10 rounded-3xl border border-slate-100 bg-white overflow-hidden group cursor-default"
              >
                {/* Background Flash */}
                <motion.div 
                  variants={flashVariants}
                  className="absolute inset-0 bg-blue-500/10 pointer-events-none"
                />
                
                {/* Lightning Bolt SVG */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 30 0 L 70 40 L 40 50 L 80 100"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={boltVariants}
                  />
                </svg>

                {/* Floating Zap Icon */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0, y: 10 },
                    hover: { 
                      opacity: [0, 1, 0], 
                      scale: [0.5, 1.2, 0.8],
                      y: [10, -10, -20],
                      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
                    }
                  }}
                  className="absolute top-4 right-4 text-blue-500"
                >
                  <Zap size={20} fill="currentColor" />
                </motion.div>

                <div className="relative z-10 text-ultramarine font-bold text-xl group-hover:text-blue-700 transition-colors">
                  {value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
