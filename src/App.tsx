import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/lenis';
import { CustomCursor } from '@/components/CustomCursor/CustomCursor';
import { Header } from '@/sections/Header/Header';
import { Hero } from '@/sections/Hero/Hero';
import { LEOPillars } from '@/sections/LEOPillars/LEOPillars';
import { ImpactCounters } from '@/sections/ImpactCounters/ImpactCounters';
import { About } from '@/sections/About/About';
import { PillarsOfImpact } from '@/sections/PillarsOfImpact/PillarsOfImpact';
import { LeadershipBoard } from '@/sections/LeadershipBoard/LeadershipBoard';
import { ProjectsGallery } from '@/sections/ProjectsGallery/ProjectsGallery';
import { Membership } from '@/sections/Membership/Membership';
import { Contact } from '@/sections/ContactFooter/Contact';
import { Footer } from '@/sections/ContactFooter/Footer';

function App() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <LEOPillars />
        <ImpactCounters />
        <About />
        <PillarsOfImpact />
        <LeadershipBoard />
        <ProjectsGallery />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
