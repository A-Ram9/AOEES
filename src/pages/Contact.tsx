import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Get in Touch
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Have a project in mind or need emergency electrical support? Our team is ready to assist you anywhere in Muscat.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-ultramarine" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</div>
                    <div className="text-slate-900 font-medium">+968 2449 1059</div>
                    <div className="text-slate-900 font-medium">+968 9901 1734</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-ultramarine" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</div>
                    <div className="text-slate-900 font-medium">info@AOEES.com</div>
                    <div className="text-slate-900 font-medium">sales@AOEES.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-ultramarine" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</div>
                    <div className="text-slate-900 font-medium">Mabellah, Muscat, Oman</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-ultramarine" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</div>
                    <div className="text-slate-900 font-medium">Sun - Thu: 8:00 AM - 6:00 PM</div>
                    <div className="text-slate-900 font-medium">Fri - Sat: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-ultramarine focus:bg-white focus:ring-0 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-ultramarine focus:bg-white focus:ring-0 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+968"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-ultramarine focus:bg-white focus:ring-0 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Required</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-ultramarine focus:bg-white focus:ring-0 transition-all outline-none appearance-none">
                      <option>Substation and SS Equipment Installation</option>
                      <option>Solar PV Projects</option>
                      <option>Industrial Maintenance</option>
                      <option>Solar Installation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:border-ultramarine focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
