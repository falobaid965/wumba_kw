import { Instagram, Send, Mail } from 'lucide-react';
import { UI_STRINGS } from '../constants';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
            {UI_STRINGS.bringArtToLife[language].split('Art').map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && <span className="text-brand-orange">Art</span>}
              </span>
            ))}
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Instagram className="w-6 h-6 text-zinc-400" />
              <a href="https://instagram.com/wumba_kw" className="text-2xl font-bold hover:text-brand-orange transition">
                @wumba_kw
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Send className="w-6 h-6 text-zinc-400" />
              <a href="https://wa.me/965XXXXXXXX" className="text-2xl font-bold hover:text-brand-orange transition">
                WhatsApp: +965 XXXX XXXX
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-zinc-400" />
              <span className="text-2xl font-bold">wumba.kw@hotmail.com</span>
            </div>
          </div>
        </div>

        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] bg-zinc-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111233.123456789!2d47.978!3d29.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c0e5a88133b%3A0x6a0f0237e3d1c9!2sKuwait%20City!5e0!3m2!1sen!2skw!4v1634567890123!5m2!1sen!2skw"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
