import { motion } from 'motion/react';

const clients = [
  { name: 'NAMA', logo: 'reqimages/nama1.jpg' },
  { name: 'Majan', logo: 'reqimages/maj.jpg' },
  { name: 'Ministry of Education', logo: 'reqimages/MOE.jpg' },
  { name: 'Al Ansari Trading', logo: 'reqimages/ans.jpg' },
  { name: 'Royal Oman Police', logo: 'reqimages/ROP.jpg' },
  { name: 'Galfar', logo: 'reqimages/galf.jpg' },
  { name: 'Al Tasnim Group', logo: 'reqimages/tasn.jpg' },
  { name: 'Unique Trading CO. LLC', logo: 'reqimages/uni.jpg' },
  { name: 'MZEC', logo: 'reqimages/maz.jpg' },
  { name: 'Ministry of Defence', logo: 'reqimages/MOD.jpg' },
  { name: 'Muna Noor', logo: 'reqimages/mun.jpg' },
  { name: 'Saif Al Harasi Group', logo: 'reqimages/saif.jpg' },
];

function Clients() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our Prestigious Clients
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We are proud to have partnered with some of the most prominent organizations in the Sultanate of Oman.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center group hover:shadow-lg transition-all"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6  group-hover:grayscale-0 transition-all overflow-hidden p-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-ultramarine transition-colors">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl italic text-slate-600 mb-8">
              "Abu Omran Electrical and Engineering Services has been our go-to electrical contractor for over 5 years. Their attention to detail and commitment to safety is unmatched in the Muscat region."
            </p>
            <div className="font-bold text-ultramarine">Project Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
