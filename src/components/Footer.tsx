import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  return (
    <>
      <footer className="py-12 border-t border-zinc-100 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
          &copy; {new Date().getFullYear()} WUMBA KUWAIT. PREMIUM 3D FOUNDRY.
        </p>
      </footer>

      {/* Sticky WhatsApp Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-[101] rtl:left-6 rtl:right-auto">
        <a
          href="https://wa.me/965XXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle className="text-white w-8 h-8" />
        </a>
      </div>
    </>
  );
}
