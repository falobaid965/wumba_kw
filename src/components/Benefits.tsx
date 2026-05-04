import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BENEFITS } from '../constants';
import { Language } from '../types';

interface BenefitsProps {
  language: Language;
}

export default function Benefits({ language }: BenefitsProps) {
  return (
    <section id="benefits" className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        {BENEFITS.map((benefit, index) => {
          const IconComponent = (Icons as any)[benefit.icon];
          return (
            <motion.div
              key={benefit.icon}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold uppercase italic tracking-tighter">{benefit.title[language]}</h3>
              <p className="text-zinc-400 leading-relaxed">{benefit.description[language]}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
