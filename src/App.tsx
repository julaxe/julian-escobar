/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-navy min-h-screen text-slate font-sans selection:bg-lightest-navy selection:text-lightest-slate overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={loading ? 'h-screen overflow-hidden' : ''}>
        <Navbar />
        <SocialLinks />
        <EmailLink />
        <main className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Experience />
          <FeaturedProjects />
          <OtherProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
