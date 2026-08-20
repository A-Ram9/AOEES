import { motion } from 'motion/react';
import { Zap, Sun, Settings, ShieldCheck, Cable, Activity } from 'lucide-react';

const services = [
  {
    id: 'substation',
    icon: <Zap className="w-10 h-10" />,
    image: '/reqimages/subs.jpg',
    title: 'Substation and SS Equipment Installations',
    description: 'Expert installation and maintenance of high-voltage substations and associated electrical equipment for power distribution networks.',
    features: ['Transformer installation', 'Busbar systems', 'Protection relays', 'Control panels']
  },
  {
    id: 'solar-pv',
    icon: <Sun className="w-10 h-10" />,
    image: '/reqimages/pvsolar.jpg',
    title: 'Solar PV Projects',
    description: 'Comprehensive solar photovoltaic solutions, from large-scale solar farms to commercial rooftop installations across Oman.',
    features: ['PV module installation', 'Inverter systems', 'Grid synchronization', 'Performance monitoring']
  },
  {
    id: 'switchgear',
    icon: <Settings className="w-10 h-10" />,
    image: '/reqimages/switch.jpg',
    title: 'Switchgear Installations',
    description: 'Design and installation of low, medium, and high voltage switchgear systems for industrial and commercial applications.',
    features: ['LV/MV/HV Switchgear', 'Circuit breakers', 'Load break switches', 'Retrofitting services']
  },
  {
    id: 'testing-commissioning',
    icon: <ShieldCheck className="w-10 h-10" />,
    image: '/reqimages/test.jpg',
    title: 'Testing and Commissioning',
    description: 'Rigorous testing and commissioning services to ensure all electrical systems are safe, reliable, and compliant with standards.',
    features: ['Relay testing', 'Insulation resistance', 'Earth testing', 'Thermal imaging']
  },
  {
    id: 'underground-cable',
    icon: <Cable className="w-10 h-10" />,
    image: '/reqimages/ugc.jpg',
    title: 'Underground Cable Works',
    description: 'Specialized underground cabling solutions, including trenching, laying, jointing, and termination of power cables.',
    features: ['Cable laying', 'Jointing & termination', 'Fault location', 'Excavation & reinstatement']
  },
  {
    id: 'overhead-line',
    icon: <Activity className="w-10 h-10" />,
    image: '/reqimages/ohl.jpg',
    title: 'Over-Head Line Network Works',
    description: 'Construction and maintenance of overhead power lines and distribution networks for rural and urban electrification.',
    features: ['Pole installation', 'Conductor stringing', 'Insulator replacement', 'Line maintenance']
  }
];

function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our Expert Services
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            AOEES specializes in high-end electrical infrastructure projects, delivering technical excellence across the Sultanate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-  rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <motion.div
                  initial={{ x: -100, y: -100, opacity: 0, scale: 0.5, rotate: -45 }}
                  whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.15 
                  }}
                  viewport={{ once: true }}
                  className="w-full h-full relative"
                >
                  {/* Lightning Bolt Overlay during animation */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.3 }}
                    className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
                  >
                    <Zap className="w-24 h-24 text-yellow-400 fill-yellow-400 animate-pulse" />
                  </motion.div>
                  
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Expertise in {service.id.replace('-', ' ')}</span>
                </div>
              </div>


              <div className="p-8 flex-grow">
                <div className="bg-slate-50 text-ultramarine w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ultramarine group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-ultramarine" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
