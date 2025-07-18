import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              TrinetraX
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="gradient-primary hover:shadow-glow transition-smooth"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-large border-t border-border">
            <nav className="flex flex-col space-y-1 p-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 rounded-md hover:bg-muted transition-smooth"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full gradient-primary hover:shadow-glow transition-smooth"
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
