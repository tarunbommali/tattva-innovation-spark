import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Services from '@/components/Services.jsx';
import About from '@/components/About.jsx';
import Stats from '@/components/Stats.jsx';
import Portfolio from '@/components/Portfolio.jsx';
import Team from '@/components/Team.jsx';
import Careers from '@/components/Careers.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

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
