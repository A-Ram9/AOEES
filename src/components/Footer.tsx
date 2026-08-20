import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-xl shadow-lg shadow-blue-500/10 group-hover:rotate-6 transition-transform">
                <img 
                  src="/reqimages/logo.jpg" 
                  alt="Oman Spark Logo" 
                  className="w-8 h-8 object-contain "
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-ultramarine leading-none">AOEES</span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-semibold mt-1">Electrical Contracting</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-me max-w-xs">
              One among Muscat's most trusted electrical contracting companies, delivering excellence in residential, commercial, and industrial sectors since 1995.
            </p>

          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-ultramarine mb-10">Quick Navigation</h3>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'Our Clients', path: '/clients' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-ultramarine transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-ultramarine mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-ultramarine mb-10">Expertise</h3>
            <ul className="space-y-5">
              {[
                { name: 'View Services', path: '/services' },
                { name: 'View Completed Works', path: '/completed-works' },
                { name: 'View Ongoing Works', path: '/ongoing-works' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-ultramarine transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-ultramarine mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-ultramarine mb-10">Get In Touch</h3>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-ultramarine" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</div>
                  <span className="text-slate-600 text-sm font-medium"> Muscat, Oman</span>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-ultramarine" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                  <span className="text-slate-600 text-sm font-medium">+968 2449 1059</span>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-ultramarine" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                  <span className="text-slate-600 text-sm font-medium">info@abuomran.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Abu Omran Electrical Engineering Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
