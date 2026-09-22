import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import InteractiveBackground from '../components/InteractiveBackground';

const projects = [
  {
    title: 'Nakkal Phase 1',
    category: 'Commercial',
    location: 'Nakkal, Muscat',
    date: '2023',
    image: "/reqimages/Nakkal Phase 1.jpg",
    description: 'Complete electrical fit-out for over 50 retail outlets and common areas.'
  },
  {
    title: 'Musannah ',
    category: 'Residential',
    location: 'Musannah, Muscat',
    date: '2022',
    image: '/reqimages/Wahiba Phase 1.jpg',
    description: 'Smart home integration and full electrical wiring for 25 luxury villas.'
  },
  {
    title: 'Sohar Industrial Port Facility',
    category: 'Industrial',
    location: 'Sohar',
    date: '2023',
    image: '/reqimages/Amerat Phase 1.jpg',
    description: 'Installation of high-voltage switchgear and industrial lighting systems.'
  },
  {
    title: 'Oman Convention Center',
    category: 'Commercial',
    location: 'Airport Heights',
    date: '2021',
    image: '/reqimages/Sur Phase 1.jpg',
    description: 'Specialized lighting and power distribution for exhibition halls.'
  },
  {
    title: 'Qurum Private Hospital',
    category: 'Healthcare',
    location: 'Qurum, Muscat',
    date: '2022',
    image: '/reqimages/BP1.jpg',
    description: 'Critical power backup systems and medical-grade electrical installations.'
  },
  {
    title: 'PDO Solar Farm Project',
    category: 'Solar',
    location: 'Interior Oman',
    date: '2023',
    image: '/reqimages/Solar.jpg',
    description: 'Sub-contracted installation of solar panel mounting and cabling.'
  }
];

function CompletedWorks() {
  return (
    <div className="relative overflow-hidden py-20">
      <InteractiveBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Completed Projects
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            A showcase of our successfully delivered projects across various sectors in the Sultanate of Oman.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-64 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-ultramarine text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 border-t border-slate-50 pt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-4 h-4 text-ultramarine" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-4 h-4 text-ultramarine" />
                    Completed in {project.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompletedWorks;
