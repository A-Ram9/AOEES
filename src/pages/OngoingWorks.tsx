import { motion } from 'motion/react';
import { Loader2, MapPin, Clock } from 'lucide-react';

const ongoingProjects = [
  {
    title: 'Oman Botanic Garden',
    location: 'Al Khoudh, Muscat',
    progress: 65,
    status: 'In Progress',
    description: 'Installation of specialized climate control electrical systems and aesthetic lighting for the world-class botanic garden.'
  },
  {
    title: 'Duqm Refinery Expansion',
    location: 'Duqm Special Economic Zone',
    progress: 40,
    status: 'Phase 2',
    description: 'Major industrial electrical infrastructure, including cabling and substation maintenance for the refinery expansion.'
  },
  {
    title: 'Luxury Hotel & Resort',
    location: 'Jabal Akhdar',
    progress: 85,
    status: 'Finishing Stage',
    description: 'Complete electrical fit-out for a 5-star resort, focusing on energy-efficient lighting and power distribution.'
  }
];

function OngoingWorks() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Ongoing Projects
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Insight into our current active projects where our teams are delivering excellence on the ground.
          </p>
        </div>

        <div className="space-y-12">
          {ongoingProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-grow max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 text-ultramarine px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      {project.status}
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div className="w-full md:w-64">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-900">Progress</span>
                    <span className="text-sm font-bold text-ultramarine">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{once: true}}                      
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-ultramarine h-full rounded-full"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4" />
                    Estimated Completion: Q4 2024
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

export default OngoingWorks;
