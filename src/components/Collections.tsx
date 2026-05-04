import { motion } from 'motion/react';
import { PRODUCTS, UI_STRINGS } from '../constants';
import { Language } from '../types';

interface CollectionsProps {
  language: Language;
}

export default function Collections({ language }: CollectionsProps) {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black uppercase tracking-tighter">{UI_STRINGS.currentDrops[language]}</h2>
            <p className="text-gray-500 mt-2 font-medium">{UI_STRINGS.orderDirectly[language]}</p>
          </motion.div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest transition">
              {UI_STRINGS.all[language]}
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition">
              {UI_STRINGS.anime[language]}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-[2.5rem] overflow-hidden bg-gray-100 aspect-square mb-8 relative">
                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">{product.name[language]}</h3>
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{product.category[language]}</p>
                </div>
                <p className="text-xl font-black text-brand-orange">
                  {product.price} {UI_STRINGS.currency[language]}
                </p>
              </div>
              <a
                href={`https://wa.me/965XXXXXXXX?text=${encodeURIComponent(product.whatsappMessage[language])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-brand-orange transition"
              >
                {UI_STRINGS.orderOnWhatsapp[language]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
