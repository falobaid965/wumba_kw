/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');

  return (
    <div className={language === 'AR' ? 'arabic-text' : ''}>
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Collections language={language} />
        <Benefits language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
