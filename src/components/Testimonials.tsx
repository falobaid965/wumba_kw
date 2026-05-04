import { motion } from 'motion/react';
import { TESTIMONIALS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface TestimonialsProps {
  language: Language;
}

export default function Testimonials({ language }: TestimonialsProps) {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black uppercase tracking-tighter mb-20"
        >
          {UI_STRINGS.trustedByArtists[language]}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-zinc-50 border border-zinc-100"
            >
              <p className="text-xl font-medium italic mb-8">{t.content[language]}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
                <p className="font-black uppercase tracking-widest text-xs">— {t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
