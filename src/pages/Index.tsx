import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Team from '@/components/Team';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Portfolio />
      <Team />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
