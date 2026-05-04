import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const isEn = language === 'EN';

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isEn ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-orange-50 text-brand-orange px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            {UI_STRINGS.studioSubtitle[language]}
          </span>
          <h1 className="hero-title text-7xl md:text-9xl font-black mb-8 uppercase">
            3D <br />
            <span className="text-zinc-300">MASTER</span>
            <br />
            PIECES.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-md font-medium leading-relaxed">
            {UI_STRINGS.heroSubtitle[language]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-center hover:scale-105 transition shadow-2xl"
            >
              {UI_STRINGS.browseFigures[language]}
            </a>
            <a
              href="https://wa.me/965XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              {UI_STRINGS.whatsappOrder[language]}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gray-100 rounded-[4rem] aspect-square overflow-hidden shadow-2xl rotate-2">
            <img
              src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1000"
              alt="Hero Figure"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-4 bg-white p-8 rounded-3xl shadow-2xl hidden md:block"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{UI_STRINGS.nextGenPrinting[language]}</p>
            <p className="text-2xl font-black">{UI_STRINGS.detail01mm[language]}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
