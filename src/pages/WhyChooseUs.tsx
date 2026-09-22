import { motion } from 'motion/react';
import { Shield, Clock, Award, ArrowRight, CheckCircle2, Pencil, FileCheck, Zap, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/InteractiveBackground';

function WhyChooseUs() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <InteractiveBackground />
      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Expert Technicians', value: '50+' },
              { label: 'Client Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-ultramarine mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Why Oman Spark?</h2>
            <p className="text-slate-600 text-lg">
              We combine international standards with local expertise to provide the best electrical contracting services in Muscat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-ultramarine" />,
                title: 'Safety First',
                description: 'We adhere to the strictest safety protocols and international electrical standards (IEC/BS).'
              },
              {
                icon: <Clock className="w-8 h-8 text-ultramarine" />,
                title: 'Timely Delivery',
                description: 'Our project management ensures every job is completed on schedule without compromising quality.'
              },
              {
                icon: <Award className="w-8 h-8 text-ultramarine" />,
                title: 'Certified Quality',
                description: 'Fully licensed and insured contractors with a track record of excellence in Oman.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Lifecycle Section */}
      <section className="relative z-10 py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
              >
                Precision in Every <span className="text-blue-400">Connection</span>
              </motion.h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our 5-step project lifecycle ensures that every electrical installation meets the highest standards of safety, efficiency, and international compliance.
              </p>
              <div className="space-y-4">
                {[
                  'Certified Master Technicians',
                  'International Safety Standards (IEC/BS)',
                  'Real-time Project Tracking',
                  'Comprehensive Post-Installation Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 animate-float"
              >
                {/* WORKFLOW LIFECYCLE ANIMATION */}
                <div className="bg-slate-800/50 border border-slate-700 shadow-[0_0_50px_rgba(37,99,235,0.15)] rounded-[2.5rem] p-8 backdrop-blur-xl">
                  <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div> Project Execution Lifecycle
                  </h4>
                  
                  <div className="relative space-y-10">
                    {/* Step 1: Consultation */}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/40 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                        <Pencil size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Consultation</div>
                        <div className="text-blue-400/60 text-xs">Site Survey & Requirements</div>
                      </div>
                      <div className="ml-auto bg-blue-500/10 text-blue-400 text-[10px] px-2 py-1 rounded font-bold border border-blue-500/20">DONE</div>
                    </div>

                    <div className="absolute left-7 top-14 w-0.5 h-10 bg-gradient-to-b from-blue-500/50 to-indigo-500/50"></div>

                    {/* Step 2: Design */}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-500/40 rounded-2xl flex items-center justify-center text-indigo-400 shadow-inner">
                        <FileCheck size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Design & Planning</div>
                        <div className="text-indigo-400/60 text-xs">Blueprints & Load Analysis</div>
                      </div>
                      <div className="ml-auto bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-1 rounded font-bold border border-indigo-500/20">APPROVED</div>
                    </div>

                    <div className="absolute left-7 top-[120px] w-0.5 h-10 bg-gradient-to-b from-indigo-500/50 to-blue-600/50"></div>

                    {/* Step 3: Installation */}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-14 h-14 bg-blue-600/20 border border-blue-600/40 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                        <Zap size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Installation</div>
                        <div className="text-blue-400/60 text-xs">On-site Execution</div>
                      </div>
                      <div className="ml-auto bg-blue-600/10 text-blue-400 text-[10px] px-2 py-1 rounded font-bold border border-blue-600/20">COMPLETED</div>
                    </div>

                    <div className="absolute left-7 top-[184px] w-0.5 h-10 bg-gradient-to-b from-blue-600/50 to-indigo-600/50"></div>

                    {/* Step 4: Testing */}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-14 h-14 bg-indigo-600/20 border border-indigo-600/40 rounded-2xl flex items-center justify-center text-indigo-400 shadow-inner">
                        <Shield size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Testing & QA</div>
                        <div className="text-indigo-400/60 text-xs">Safety & Performance Checks</div>
                      </div>
                      <div className="ml-auto bg-indigo-600/10 text-indigo-400 text-[10px] px-2 py-1 rounded font-bold border border-indigo-600/20">VERIFIED</div>
                    </div>

                    <div className="absolute left-7 top-[248px] w-0.5 h-10 bg-gradient-to-b from-indigo-600/50 to-blue-500/50"></div>

                    {/* Step 5: Handover */}
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/40 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                        <UserCheck size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Final Handover</div>
                        <div className="text-blue-400/60 text-xs">Documentation & Training</div>
                      </div>
                      <div className="ml-auto bg-blue-500/10 text-blue-400 text-[10px] px-2 py-1 rounded font-bold border border-blue-500/20">SUCCESS</div>
                    </div>
                  </div>

                  <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-2">
                      <span>Project Completion</span>
                      <span className="text-blue-400">100% COMPLETE</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Visual background flares */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 blur-[120px] -z-10 rounded-full animate-pulse-soft"></div>
            </div>
          </div>
        </div>
        
        {/* Subtle Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-ultramarine text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to start your project?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact our expert team today for a free consultation and detailed quotation for your electrical needs.
          </p>
          <Link to="/contact" className="bg-white text-ultramarine px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
