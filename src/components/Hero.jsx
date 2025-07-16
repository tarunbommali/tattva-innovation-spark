import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full gradient-primary text-primary-foreground mb-6 shadow-glow">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Full Stack Solutions</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">
              Full Stack AI Solutions
            </span>
            <br />
            <span className="text-foreground">
              for Tomorrow's Innovation
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge MERN Stack, AWS, Docker, and DevOps technologies 
            to deliver innovative applications with integrated AI capabilities.
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['MERN Stack', 'AWS', 'MongoDB', 'Docker', 'DevOps', 'AI/ML'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="gradient-primary hover:shadow-glow transition-smooth group"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;