import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-32 bg-zinc-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-sm font-black tracking-[0.4em] text-brand-orange uppercase mb-8">{UI_STRINGS.theStudio[language]}</h2>
        <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {UI_STRINGS.studioDescription[language].split('foundry').map((part, i) => (
            <span key={i}>
              {part}
              {i === 0 && <span className="text-zinc-400">foundry</span>}
            </span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
